import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoryState } from "../../../store/category";
import { userCurrentPosState } from "../../../store/userCurrentPos";
import { rem } from "../../../styles/rem";

const CategoryList = ({ sendedId }) => {
  const category = useRecoilValue(categoryState);
  const loca = useLocation();
  const categoryPos = loca.pathname.split("/")[1];
  const categoryId = parseInt(loca.pathname.split("/")[2]);
  const [userCurrentPos, setUserCurrentPos] =
    useRecoilState(userCurrentPosState);

  useEffect(() => {
    if (categoryPos === "category") {
      setUserCurrentPos(categoryId);
    }
  }, [categoryId, categoryPos, setUserCurrentPos]);

  return (
    <CategoryListBlock>
      <h2 className="category-title">커뮤니티</h2>
      <section className="category">
        {category.map(({ id, name }, idx) => {
          if (id === userCurrentPos || id === sendedId)
            return (
              <Link
                to={`/category/${id}`}
                className="nav-links curCategory"
                key={idx}
              >
                {name}
              </Link>
            );
          else
            return (
              <Link to={`/category/${id}`} className="nav-links" key={idx}>
                {name}
              </Link>
            );
        })}
      </section>
    </CategoryListBlock>
  );
};

const CategoryListBlock = styled.div`
  @media screen and (min-width: 768px) {
    width: 100%;
    background-color: #fff;
    padding: 1rem;
    box-shadow: ${(props) => props.theme.boxShadow};
    border-radius: 0.4rem;

    h2 {
      font-size: 1.2rem;
      border-bottom: 1px solid #ddd;
      padding: 0.3rem 0;
      margin-bottom: 0.5rem;
    }
    .nav-links {
      display: block;
      text-decoration: none;
      color: ${(props) => props.theme.black};
      font-size: 0.8rem;
      list-style: none;
      margin: 0.3rem 0;
      font-weight: 600;
      &.curCategory {
        color: #53b7ba;
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: ${rem(5)} 0;
    width: 100vw;
    margin: auto;
    h2 {
      display: none;
    }
    .category {
      font-size: 14px;
      width: 100%;
      margin: 9px 0;
      //overflow-x: scroll;
      .nav-links {
        color: rgb(148, 150, 155);
        padding: 0 ${rem(2)} 0px;
        border-bottom: 2px solid transparent;
        text-decoration: none;
        border-bottom: 2px solid #dbdee7;
        &.curCategory {
          color: #53b7ba;
          border-bottom: 2px solid #53b7ba;
        }
      }
    }
  }
`;

export default CategoryList;
