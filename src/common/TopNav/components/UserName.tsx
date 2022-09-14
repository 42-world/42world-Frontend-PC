import { Link } from 'react-router-dom';
import { StyledProfileImage, StyledUserName } from '../styled';
import { PICTURE_DIR, PROFILE_LIST } from '@common/constants';

interface Props {
  user: {
    character: number;
    githubUsername: string;
    id: number;
    intraId: string;
    nickname: string;
    role: string;
  };
}

const UserName = ({ user }: Props) => {
  return (
    <Link to="/mypage">
      <StyledUserName>
        <div className="username-div">{user.nickname}</div>
        <StyledProfileImage
          src={`${PICTURE_DIR}${PROFILE_LIST[user.character]}`}
          alt="사용자 캐릭터"
          width="50px"
          height="50px"
        />
      </StyledUserName>
    </Link>
  );
};

export default UserName;
