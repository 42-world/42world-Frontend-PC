import { useMyArticleBoard } from '@components/pages/Mypage/hooks';

import { StyledMyArticleBoard } from '@components/pages/Mypage/styles';

interface IProps {
  articleType: number;
}

const MyArticleBoard = ({ articleType }: IProps) => {
  const { articleInfo, handleClickGoBack, innerComponent } = useMyArticleBoard(articleType);

  return (
    <StyledMyArticleBoard>
      <div className="title">
        <h1>{articleInfo.title}</h1>
        <button className="go-back" onClick={handleClickGoBack}>
          {'< 돌아가기'}
        </button>
      </div>
      {innerComponent}
    </StyledMyArticleBoard>
  );
};

export default MyArticleBoard;