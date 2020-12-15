import Head from "next/Head";
import React from "react";
import styled from "styled-components";
import Navbal from "../Navbar";
import Footer from "../Footer";

const Layout = ({ children, isColor }) => {
  return (
    <>
      <Container>
        <Wrap>
          <Navbal isColor={isColor} />
          <main>{children}</main>
          <Footer />
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
`;
