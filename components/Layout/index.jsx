import React from "react";
import styled from "styled-components";
import Navbal from "../Navbar";
import Footer from "../Footer";

const Layout = ({ children, isColor, isMobile }) => {
  console.log(isMobile);
  return (
    <>
      <Container>
        <Wrap>
          <Navbal isColor={isColor} />
          {children}
          {isMobile && <Footer />}
        </Wrap>
      </Container>
    </>
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
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  @media ${(props) => props.theme.desktop} {
    background: none;
    /* width: 1180px; */
  }
`;
