/** @jsxImportSource @emotion/react */

import { BiCommentDots } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

import { css } from '@emotion/react';
import { theme } from '@styles/theme';

const NotiList = ({ type, body, articleId }) => {
  const navi = useNavigate();
  const onClickNavigation = () => {
    // UserItems - StyledMenuButton 컴포넌트의 Onclick 이벤트 핸들러가 중첩해서 발생하는 이슈
    // 하위 컴포넌트에서 setIsOpen을 아예 사용하지 않기로
    navi(`article/${articleId}`);
  };
  return (
    <>
      <div css={notiList} onClick={onClickNavigation}>
        <BiCommentDots css={NotiItemIconStyle} />
        <text css={NotiItemContentStyle}>{body}</text>
      </div>
      <div className="divide"></div>
    </>
  );
};
export default NotiList;

const notiList = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${theme.buttonBlue1};
  }
  * {
    margin: 3px;
    overflow: hidden;
  }
`;

const NotiItemIconStyle = css`
  min-width: 1.8rem;
  min-height: 1.8rem;
  margin-right: 0.7rem;
  color: ${theme.textBlue};
`;

const NotiItemContentStyle = css`
  font-size: 0.8rem;
  font-weight: 400;
  width: 13rem;
`;
