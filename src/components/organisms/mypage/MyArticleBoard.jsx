import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { UserService } from "../../../network";
import PreviewArticle from "../category/PreviewArticle";
import MyArticlePageSelector from "./MyArticlePageSelector";

const MyArticleBoard = ({ articleType }) => {
  const [articles, setArticles] = useState(null);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const navi = useNavigate();
  const ARTICLE = 1,
    COMMENT = 2;
  //LIKED = 3;

  const handleClickGoBack = () => {
    navi("/mypage");
  };

  useEffect(() => {
    const fetchMyArticles = async () => {
      const response =
        articleType === ARTICLE
          ? await UserService.getMyArticles(page)
          : articleType === COMMENT
          ? await UserService.getMyComments(page)
          : await UserService.getLikeArticles(page);
      setArticles(response.data);
      setPageCount(response.meta.pageCount);
    };

    fetchMyArticles();
  }, [articleType, page]);

  return (
    <MyArticleWrapper>
      <div>
        <h1>
          {articleType === ARTICLE
            ? "내 게시글"
            : articleType === COMMENT
            ? "내 댓글"
            : "좋아요한 글"}
        </h1>
      </div>
      <hr />
      <div className="go-back" onClick={handleClickGoBack}>
        &lt; 돌아가기
      </div>
      <div className="article-list">
        {articles &&
          articles.map((article, id) => (
            <Link
              to={`/article/${article.id}`}
              className="article-content"
              key={id}>
              <PreviewArticle article={article} />
            </Link>
          ))}
      </div>
      <MyArticlePageSelector
        curPage={page}
        setCurPage={setPage}
        pageCount={pageCount}
      />
    </MyArticleWrapper>
  );
};

const MyArticleWrapper = styled.div`
  width: 100%;
  margin: 1rem 0;
  padding: 0.3rem;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadow};
  h1 {
    margin: 0.3rem 0.1rem 0.6rem 0.5rem;
    font-size: 1.6rem;
  }
  hr {
    border: 0;
    height: 1px;
    background-color: ${(props) => props.theme.lineGray1};
  }
  .go-back {
    padding: 0.3rem;
    line-height: 1.3rem;
    border-bottom: 1px solid ${(props) => props.theme.lineGray1};
    &:hover {
      cursor: pointer;
    }
  }
  .article-content {
    text-decoration: none;
    color: ${(props) => props.theme.black};
  }
  ${(props) => props.theme.mobileSize} {
    box-shadow: none;
    border-bottom: 1px solid ${(props) => props.theme.lineGray1};
    border-radius: 0;
    margin: 0;
  }
`;

export default MyArticleBoard;
