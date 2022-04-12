import { useEffect, useState } from "react";

import PreviewArticles from "./PreviewArticles";
import BoardHeader from "./BoardHeader";

// import { AiOutlineEye } from "react-icons/ai";

import { ArticleList, Body, Wrapper } from "../../atoms/Board";
import styled from "styled-components";
// import ArticleService from "../../../network/AuthService";
import { Link, useLocation } from "react-router-dom";
import { ArticleService } from "../../../network";
// import ArticleService from "../../../network/ArticleService";

// const getData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       () =>
//         resolve([
//           {
//             title: "success",
//             content: "샘플 데이터",
//             writer: "afs",
//             createTime: "2022-03-24",
//             viewCount: 124,
//             likeCount: 16,
//             commentCount: 4,
//             id: 1,
//           },
//           {
//             title: "success",
//             content: "샘플 데이터",
//             writer: "afs",
//             createTime: "2022-03-24",
//             viewCount: 124,
//             likeCount: 16,
//             commentCount: 4,
//             id: 2,
//           },
//         ]),
//       1000
//     );
//   });
// };

const Board = () => {
  const [Articles, setArticles] = useState(null);
  const loca = useLocation();
  const categoryId = loca.pathname.split("/")[2];
  let page = 1;

  // const getArticles = async () => {
  //   const result = await getData();
  //   setArticles(result);
  // };
  useEffect(() => {
    (async () => {
      const { data } = await ArticleService.getArticlesByCategoryId(
        categoryId,
        page
      );
      // const data = await ArticleService.getArticles(categoryId, page);
      setArticles(data);
    })();
  }, [categoryId]);
  return (
    <>
      <CategoryBlock>
        <Wrapper>
          <div className="BoardHeaderWrapper">
            <BoardHeader />
          </div>
          <Body>
            <ArticleList>
              {Articles &&
                Articles.map((article, id) => (
                  <Link
                    to={`/article/${article.id}`}
                    className="articleList_content"
                    key={id}
                  >
                    <PreviewArticles article={article} />
                  </Link>
                ))}
            </ArticleList>
          </Body>
        </Wrapper>
      </CategoryBlock>
    </>
  );
};

const CategoryBlock = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: #fff;

  .BoardHeaderWrapper {
    border-bottom: 0.1rem solid #d8d8d8;
  }
  .articleList_content {
    text-decoration: none;
    color: ${(props) => props.theme.black};
  }
`;

export default Board;