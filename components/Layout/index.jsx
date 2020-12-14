import React from "react";
import styled from "styled-components";
import Navbal from "../Navbar";

const Layout = ({ children }) => {
  return (
    <Container>
      <Wrap>
        <Navbal />
        {children}
      </Wrap>
    </Container>
  );
};
export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  min-width: 320px;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  position: relative;
  @media ${(props) => props.theme.mobile} {
    background: #ff7272;
  }
  @media ${(props) => props.theme.tablet} {
    background: #333;
  }
  @media ${(props) => props.theme.desktop} {
    background: #999;
    width: 1180px;
  }
`;
