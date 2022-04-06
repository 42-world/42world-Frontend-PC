import React from "react";
import styled from "styled-components";

import ProfileSection from "./ProfileSection";

import IconSet from "../../atoms/Mypage";
import MypageData from "../../../datas/mypage";

const MyProfile = () => {
  return (
    <MyProfileDiv>
      <h1>마이페이지</h1>
      <hr />
      <div className="profile-section">
        <ProfileSection
          imgRef={MypageData.profilePhoto}
          userName={MypageData.userName}
        />
        {/*
        <LinkSection />*/}
      </div>
    </MyProfileDiv>
  );
};

const MyProfileDiv = styled.div`
  background-color: white;
  border: 1px solid purple;
  box-shadow: ${(props) => props.theme.boxShadow};
  width: 100%;
  height: 30%;
  border-radius: ${(props) => props.theme.borderRadius};
  h1 {
    margin: 0.3rem 0.1rem;
    margin-left: 0.5rem;
    height: fit-content;
    font-size: 1.6rem;
  }
  hr {
    color: ${(props) => props.theme.LineGray1};
  }
  .profile-section {
    border: 1px solid black;
    display: flex;
    height: calc(100% - 2rem - 0.6rem);
  }
  @media screen and (min-width: 769px) {
    height: 40%;
    h1 {
      margin: 0.5rem 0.1rem;
      margin-left: 1rem;
      height: 2.4rem;
      color: magenta;
      font-size: 2rem;
    }
    .profile-section {
      display: flex;
      flex-direction: row;
    }
  }
`;

export default MyProfile;