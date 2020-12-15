import React from "react";
import styled from "styled-components";

import GitHubIcon from "@material-ui/icons/GitHub";
const Footer = () => {
  return (
    <Box>
      <a href="https://github.com/ovogmap/theMovie" target="_blank">
        <Container>
          <GitHubIcon />
          <Title>Copyright © 2020 All rights ovogmap.</Title>
        </Container>
      </a>
    </Box>
  );
};
export default Footer;

const Box = styled.footer`
  position: fixed;
  bottom: 0;
`;

const Title = styled.p``;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
`;

const gitIcon = styled(GitHubIcon)`
  &:hover {
    fill: #ff7272;
  }
`;
