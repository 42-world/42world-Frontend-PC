import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";

import styled from "styled-components";

const BoardHeader = () => {
  const [search, setSearch] = useState("");
  const navi = useNavigate();

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    if (search === "") return;
    // console.log(search); // 검색 창으로 이동해야 함.
    navi(`/search?keyword=${search}`);
    setSearch("");
  };

  const handleChangeSearch = (e) => {
    setSearch(e.currentTarget.value);
  };
  const handleCreateArticle = () => {
    navi(`/write`);
  };

  return (
    <BoardHeaderDiv>
      <h2 className="title">자유게시판</h2>
      <div className="side-box">
        <form onSubmit={handleSubmitSearch}>
          <div className="input-box">
            <SearchIcon />
            <input
              onChange={handleChangeSearch}
              type="text"
              className="search"
              value={search}
              placeholder="게시물 제목 검색"
            />
          </div>
        </form>
        <button onClick={handleCreateArticle}>글쓰기</button>
      </div>
    </BoardHeaderDiv>
  );
};

export default BoardHeader;

const BoardHeaderDiv = styled.div`
  button {
    background: #53b7ba;
    color: #ffffff;
    border: 0px;
    padding: 0 0.7em 0 0.7em;
    border-radius: 20px;
    cursor: pointer;
  }
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 18px;
  }
  .side-box {
    display: flex;
    flex-direction: row;
    margin: 0.2em;
    .input-box {
      width: 40vw;
      border: 1px solid #dbdbdb;
      display: flex;
      padding: 0.2em;
      border-radius: 1em;
      margin-right: 10px;
      color: black;
      input {
        font-size: 14px;
        width: 30vw;
        border: 0px;
        &::placeholder {
          color: #dee2e6;
        }
      }
    }
  }
  @media screen and (min-width: 960px) {
    .side-box {
      .input-box {
        width: 20vw;
        input {
          font-size: 14px;
          width: 16vw;
        }
      }
    }
  }
  @media screen and (max-width: 960px) {
    .side-box {
      .input-box {
        width: 40vw;
        input {
          font-size: 14px;
          width: 30vw;
        }
      }
    }
  }
`;