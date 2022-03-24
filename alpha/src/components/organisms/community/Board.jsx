import { useEffect, useState } from "react";
import {
  ArticleList,
  ArticleTitle,
  BoardIcon,
  BoardLink,
  Body,
  CountItem,
  Head,
  TitleSide,
  Wrapper
} from "../../atoms/Board";
import { AiOutlineEye } from "react-icons/ai";

import styled from "styled-components";

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve([
          {
            title: "success",
            content: "샘플 데이터",
            writer: "afs",
            createTime: "2022-03-24",
            viewCount: 124,
            likeCount: 16,
            commentCount: 4
          },
          {
            title: "success",
            content: "샘플 데이터",
            writer: "afs",
            createTime: "2022-03-24",
            viewCount: 124,
            likeCount: 16,
            commentCount: 4
          }
        ]),
      1000
    );
  });
};

const Board = () => {
  const [Articles, setArticles] = useState(null);

  const getArticles = async () => {
    const result = await getData();
    setArticles(result);
  };
  useEffect(() => {
    getArticles();
  }, []);
  return (
    <CommunityBlock>
      <Wrapper>
        <Head>
          <TitleSide>
            <BoardIcon></BoardIcon>
            <h2>자유게시판</h2>
          </TitleSide>
          <BoardLink to={`/topics/1`}>더보기 +</BoardLink>
        </Head>
        <Body>
          <ArticleList>
            {Articles &&
              Articles.map((a, id) => (
                <li key={a.title + id}>
                  <ArticleTitle>{a.title}</ArticleTitle>
                  <CountItem>
                    <AiOutlineEye size="16" className="icon" />
                    <span>{a.viewCount}</span>
                  </CountItem>
                </li>
              ))}
          </ArticleList>
        </Body>
      </Wrapper>
    </CommunityBlock>
  );
};

const CommunityBlock = styled.div`
  .header {
    display: flex;
    flex-direction: row;
  }
`;

export default Board;
