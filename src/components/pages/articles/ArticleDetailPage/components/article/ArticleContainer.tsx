import { Article } from '@root/network/types/Article';
import { getCategoryName, useGetCategory } from '@common/hooks/api/category';
import ArticleDetailHeader from './ArticleDetailHeader';
import ArticleContent from './ArticleContent';

interface ArticleContainer {
  article: Article;
}

const ArticleContainer = ({ article }: ArticleContainer) => {
  const { categories } = useGetCategory();
  const categoryName = getCategoryName(article?.categoryId, categories);
  return (
    <>
      <ArticleDetailHeader article={article} categoryName={categoryName} />
      <ArticleContent article={article} />
    </>
  );
};

export default ArticleContainer;