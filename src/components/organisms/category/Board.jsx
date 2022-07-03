import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams, useParams } from 'react-router-dom';
import styled from 'styled-components';
import BoardHeader from '@common/Board/BoardHeader';
import { ArticleList, Body, Wrapper } from '@components/atoms/Board';
import { serializeFormQuery } from '@root/common/utils';
import { getArticles } from '@common/hooks/api/article';
import { getSearchResults } from '@common/hooks/api/search';
import PreviewArticle from './PreviewArticle';
import PageSelector from './PageSelector';

const Board = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const param = useParams();
  const [page, setPage] = useState(1);
  const query = new URLSearchParams(location.search).get('q');

  const categoryId = param?.id ? parseInt(param.id) : null;
  const hasQuery = query?.length > 1;
  const { articles: articleList, meta: articlesMeta } = getArticles(categoryId, page, !hasQuery);
  const { articles: searchedArticles, meta: searchedArticlesMeta } = getSearchResults(query, page, hasQuery);

  const articles = hasQuery ? searchedArticles : articleList;
  const meta = hasQuery ? searchedArticlesMeta : articlesMeta;

  const handleChange = value => {
    setPage(value);
    setSearchParams({ ...serializeFormQuery(searchParams), page: value });
  };

  useEffect(() => {
    setPage(searchParams.get('page'));
  }, [searchParams]);

  return (
    <>
      <CategoryBlock>
        <Wrapper>
          <div className="BoardHeaderWrapper">
            <BoardHeader hasQuery={hasQuery} />
          </div>
          <Body>
            <ArticleList>
              {articles &&
                articles.map((article, id) => (
                  <Link to={`/article/${article.id}`} className="articleList_content" key={id}>
                    <PreviewArticle article={article} />
                  </Link>
                ))}
            </ArticleList>
          </Body>
          <PageSelector currentPage={page} onChangePage={handleChange} totalPageCount={meta?.pageCount || 0} />
        </Wrapper>
      </CategoryBlock>
    </>
  );
};

const CategoryBlock = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;
  box-shadow: ${props => props.theme.boxShadow};
  background-color: #fff;

  .BoardHeaderWrapper {
    border-bottom: 0.1rem solid #d8d8d8;
  }
  .articleList_content {
    text-decoration: none;
    color: ${props => props.theme.black};
    &:last-child {
      div {
        border: none;
      }
    }
  }
`;

export default Board;
