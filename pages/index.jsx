import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Link from "next/link";
import Head from "next/Head";

import Layout from "../components/Layout";

import theme from "../styles/media";
import introApi from "../common/util/introApi";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";

const Home = ({ data }) => {
  console.log(data);
  const onMedia = useMediaQuery({
    query: theme.tablet,
  });
  return (
    <>
      <Head>
        <title>Movie</title>
      </Head>
      <Layout>
        <Container>
          <ImgBox URL={data?.backdropPath}>
            {!onMedia && <Poster src={`${data.poster_path}`} />}
            <TextBox>
              <Text title={data}>{data?.title}</Text>
              <Text>{data?.tagline}</Text>
              <Join>
                <Link href="/detail/[id]" as={`/detail/${data.id}`}>
                  <a>보러가기</a>
                </Link>
                <TrendingFlatIcon />
              </Join>
            </TextBox>
          </ImgBox>
        </Container>
      </Layout>
    </>
  );
};
export default Home;

export async function getStaticProps() {
  const data = await introApi();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: data,
    },
  };
}

const Poster = styled.img`
  width: 180px;
  height: 250px;
  border-radius: 5px;
  box-shadow: 2px 2px 16px 2px #00000094;
`;

const Join = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: none;
  background: none;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  font-weight: 700;
  outline: none;
  transition: all 0.3s;
  &:hover {
    color: #ff3b3b;
  }
  @media ${(props) => props.theme.tablet} {
    font-size: ${(props) => (props.title ? "36px" : "30px")};
  }
  @media ${(props) => props.theme.desktop} {
    margin: 0 auto;
  }
`;

const Text = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #fff;
  font-size: ${(props) => (props.title ? "26px" : "18px")};
  font-weight: ${(props) => (props.title ? "700" : "700")};
  margin-bottom: 20px;
  @media ${(props) => props.theme.tablet} {
    margin-bottom: 30px;
    font-size: ${(props) => (props.title ? "36px" : "30px")};
    font-weight: ${(props) => (props.title ? "700" : "700")};
  }
  @media ${(props) => props.theme.desktop} {
    margin-bottom: 50px;
  }
`;

const ImgBox = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background: ${(props) => `center / cover no-repeat url(${props.URL})`};
  @media ${(props) => props.theme.desktop} {
    justify-content: center;
  }
`;

const TextBox = styled.div`
  text-align: left;
  background: rgba(58, 55, 55, 0.377);
  width: 100%;
  padding: 20px;
  @media ${(props) => props.theme.desktop} {
    text-align: center;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  @media ${(props) => props.theme.mobile} {
    background: #ff7272;
  }
  @media ${(props) => props.theme.tablet} {
    background: #333;
  }
  @media ${(props) => props.theme.desktop} {
    background: #999;
  }
`;
