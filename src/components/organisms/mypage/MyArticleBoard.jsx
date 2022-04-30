import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { UserService } from "../../../network";
import PreviewArticle from "../category";

const MyArticleBoard = ({ isComment }) => {
  const [articles, setArticles] = useState(null);
  const navi = useNavigate();

  const handleClickGoBack = () => {
    navi("/mypage");
  };

  useEffect(() => {
    const fetchMyArticles = async () => {
      const response = isComment
        ? await UserService.getMyComments()
        : await UserService.getMyArticles();
      setArticles(response.data.slice(0, 5));
    };

    fetchMyArticles();
  }, [isComment]);

  return (
    <MyArticleWrapper>
      <div>
        <h1>{isComment ? "내 댓글" : "내 게시글"}</h1>
      </div>
      <hr />
      <div className="go-back" onClick={handleClickGoBack}>
        {"< 돌아가기"}
      </div>
      <div className="article-list">{/* map -> article 표시 */}</div>
    </MyArticleWrapper>
  );
};

const MyArticleWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin: 1rem 0;
  padding: 0.3rem;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadow};
  h1 {
    margin: 0.3rem 0.1rem 0.6rem 0.5rem;
    height: fit-content;
    font-size: 1.6rem;
  }
  hr {
    color: ${(props) => props.theme.LineGray1};
  }
  .go-back {
    margin: 0.3rem 0;
    padding: 0.3rem;
    &:hover {
      cursor: pointer;
    }
  }
  ${(props) => props.theme.mobileSize} {
    box-shadow: none;
    border-bottom: 1px solid ${(props) => props.theme.lineGray1};
    border-radius: 0;
    margin: 0;
  }
`;

export default MyArticleBoard;
