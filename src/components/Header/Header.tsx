import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderComponent>
      <HeaderLogoImg
        src="https://okkot.com/images/common/logo.svg"
        alt="오늘의 꽃"
      ></HeaderLogoImg>
    </HeaderComponent>
  );
};

export default Header;

const HeaderComponent = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderLogoImg = styled.img`
  width: 150px;
  height: 150px;
`;
