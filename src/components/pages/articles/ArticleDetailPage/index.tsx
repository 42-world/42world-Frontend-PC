import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useGetArticleById } from '@root/common/hooks/api/article';
import ArticleContainer from './components/article/ArticleContainer';
import CommentContainer from './components/comment/CommentContainer';
import Board from '../common/Board';

const ArticleDetailPage = () => {
  const { id = '0' } = useParams();
  const { isError, article } = useGetArticleById(parseInt(id));
  const navigator = useNavigate();

  useEffect(() => {
    if (isError) {
      window.alert('접근할 수 없습니다.');
      navigator('/');
    }
  }, [isError]);

  return (
    <Board categoryId={article?.categoryId}>
      <div className="block article_block">
        {article && (
          <>
            <ArticleContainer article={article} />
            <CommentContainer articleId={article.id} />
          </>
        )}
      </div>
    </Board>
  );
};

export default ArticleDetailPage;
