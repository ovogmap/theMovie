import React from "react";
import styled from "styled-components";

import Layout from "../../components/Layout";
const List = () => {
  return (
    <Layout isColor={true}>
      <Container>
        <div>List</div>
      </Container>
    </Layout>
  );
};
export default List;

const Container = styled.div`
  margin-top: 60px;
`;
