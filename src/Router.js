import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PageLayout } from '@common/PageLayout';
import Article from './components/pages/article/_id';
import BoardList from './components/pages/board/BoardList';
import ErrorPage from './components/pages/Error';
import Login from './components/pages/login/Login';
import Main from './components/pages/main/Main';
import Mypage from './components/pages/Mypage';
import Writing from '@components/pages/writing';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route exact path="/" element={<Main />} />
          <Route path="category" element={<BoardList />} />
          <Route path="category/:id" element={<BoardList />} />
          <Route path="mypage" element={<Mypage />} />
          <Route path="mypage/:articleType" element={<Mypage />} />
          <Route path="writing" element={<Writing />} />
          <Route path="article/:id" element={<Article />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="auth/github/callback" element={<Login />} />

        <Route path="error" element={<ErrorPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
