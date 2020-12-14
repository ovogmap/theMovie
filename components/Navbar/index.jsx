import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import DehazeIcon from "@material-ui/icons/Dehaze";
import CloseIcon from "@material-ui/icons/Close";
const Navbal = () => {
  // const [wWidth, setWWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);
  // console.log("width", wWidth);
  return (
    <Nav>
      <UL>
        <LI>
          <Link href="/">
            <a>홈</a>
          </Link>
        </LI>
        <LI>
          {isOpen ? (
            <CloseIcon
              onClick={() => {
                setIsOpen((v) => !v);
              }}
            />
          ) : (
            <Hmenu
              onClick={() => {
                setIsOpen((v) => !v);
              }}
            >
              <DehazeIcon />
            </Hmenu>
          )}
        </LI>
        {isOpen && (
          <Navbox isOpen={isOpen}>
            <ul>
              <li>
                <Link href="#">
                  <a>리스트</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>리스트</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>리스트</a>
                </Link>
              </li>
            </ul>
          </Navbox>
        )}
      </UL>
    </Nav>
  );
};
export default Navbal;
const Nav = styled.nav`
  position: relative;
`;
const UL = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #fff;
  padding: 0 15px;
  position: relative;
`;
const LI = styled.li``;
const Hmenu = styled.button`
  border: none;
  background: none;
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const Navbox = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(46, 46, 46, 0.356);
  display: block;
  z-index: 1;
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  display: ${(props) => (props.isOpen ? "block" : "none")};
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  li {
    padding: 10px 20px;
    border-bottom: 1px solid #333;
  }
`;
