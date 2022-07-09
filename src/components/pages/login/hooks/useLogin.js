import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';

import { AuthService } from '@network';
import { getUser } from '@common/hooks/api/user';
import { isEmpty } from '@common/utils';

const LOGIN_ERROR_MESSAGE = '로그인 실패하였습니다. 다시 시도해주세요';

const useLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const { user } = getUser();

  const onClickButton = () => {
    try {
      const redirectUrl = AuthService.getAuthUrl();
      window.location.href = redirectUrl;
    } catch (e) {
      alert(e);
    }
  };

  const isLoggedIn = () => {
    return !isEmpty(user);
  };

  const isAuthCallbackProcess = () => {
    return pathname.startsWith('/auth');
  };

  const getCode = () => {
    const { code } = qs.parse(window.location.search, {
      ignoreQueryPrefix: true,
    });

    return code;
  };

  const getAccessToken = async code => {
    const res = await AuthService.getAuthAccessToken(code);
    if (res.status == 200) {
      navigate('/');
    } else {
      throw new Error(LOGIN_ERROR_MESSAGE);
    }
  };

  useEffect(() => {
    (async () => {
      if (isAuthCallbackProcess()) {
        try {
          const code = getCode();

          if (code) {
            await getAccessToken(code);
          }
        } catch (e) {
          // TODO: need to change alert to modal
          window.alert(e.message);
          window.location.href = '/login';
        }
      }
      if (isLoggedIn()) {
        navigate('/');
      }
    })(),
      [];
  });

  return { onClickButton, isAuthCallbackProcess };
};

export default useLogin;
