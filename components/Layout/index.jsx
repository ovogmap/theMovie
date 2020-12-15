import React from "react";
import styled from "styled-components";
import Navbal from "../Navbar";

const Layout = ({ children, isColor }) => {
  return (
    <Container>
      <Wrap>
        <Navbal isColor={isColor} />
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
  min-width: 320px;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  position: relative;
  @media ${(props) => props.theme.mobile} {
    background: none;
  }
  @media ${(props) => props.theme.tablet} {
    background: none;
  }
  @media ${(props) => props.theme.desktop} {
    background: none;
    width: 1180px;
  }
`;
