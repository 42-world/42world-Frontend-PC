import { Link } from 'react-router-dom';

import PreviewArticle from '@components/pages/articles/ArticleListPage/components/PreviewArticle';
import { Article } from '@root/network/types/Article';
import { useGetMyComments } from '@components/pages/Mypage/hooks';
import PageSelector from '@components/pages/Mypage/components/MyArticleBoard/PageSelector';

const MyCommentList = () => {
  const { comments, maxPage } = useGetMyComments();
  return (
    <>
      <div className="article-list">
        {comments.map((article: Article, index: number) => (
          <Link to={`/article/${comments[index].article.id}`} className="article-content" key={`comment-${index}`}>
            <PreviewArticle article={article} />
          </Link>
        ))}
      </div>
      <PageSelector maxPage={maxPage} />
    </>
  );
};

export default MyCommentList;
