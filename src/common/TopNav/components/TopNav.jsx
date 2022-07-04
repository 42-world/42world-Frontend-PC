import { useRecoilState } from 'recoil';

import { notiModalState } from '@root/store/notiModal';

import Logo from './Logo';
import MenuItems from './MenuItems';
import UserItems from './UserItems';
import NotiModal from './NotiModal';

import Popover from '@mui/material/Popover';
import { StyledTopNav } from '../styled';

const TopNav = () => {
  const [modalTarget, setModalTarget] = useRecoilState(notiModalState);

  const handleClickNoti = e => {
    setModalTarget(e.currentTarget);
  };
  const handleClose = () => {
    setModalTarget(null);
  };
  return (
    <>
      <StyledTopNav>
        <div className="top-nav">
          <Logo />
          <MenuItems />
          <UserItems onClick={handleClickNoti} />
        </div>
      </StyledTopNav>

      <Popover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={modalTarget}
        anchorEl={modalTarget}
        onClose={handleClose}
      >
        <NotiModal />
      </Popover>
    </>
  );
};

export default TopNav;
