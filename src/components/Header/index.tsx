import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";

const Root = styled.header`
  width: 100%;
  background-color: #254678;
  color: white;
  padding: 18px 60px;
  @media screen and (max-width: 420px) {
    padding: 18px 20px;
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const HeaderMenu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  font-size: 14px;
  margin: 0;
  & > li {
    margin-right: 12px;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 22px;
  @media screen and (max-width: 420px) {
    font-size: 18px;
  }
`;

const Header: React.FC = () => {
  return (
    <Root>
      <HeaderWrapper>
        <Link to="/">
          <Title>free 技術log</Title>
        </Link>
        <HeaderMenu>
          {/* <li>このブログについて</li> */}
          {/* <li>お問い合せ</li> */}
        </HeaderMenu>
      </HeaderWrapper>
    </Root>
  );
};

export default Header;
