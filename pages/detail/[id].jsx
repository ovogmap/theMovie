import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import Link from "next/link";

import Layout from "../../components/Layout";

import theme from "../../styles/media";
import detailApi from "../../common/api/detail";
const Detail = ({ data }) => {
  const [isTrue, setIsTrue] = useState(true);
  const onMedia = useMediaQuery({
    query: theme.tablet,
  });
  return (
    <>
      <Layout isColor={isTrue}>
        <Container>
          <Bg URL={data.backdrop_path} />
          <Poster src={`${data.poster_path}`} />
          <Title>{data.title}</Title>
          <SubTitleBox>
            <Gens>{data.gens}</Gens>
            <Gens>{data.runtime}분</Gens>
          </SubTitleBox>
          <ReactStars
            size={24}
            count={5}
            activeColor="#ffd700"
            value={Math.round(data.vote_average / 2)}
            edit={false}
          />
          <Tagline>{data.tagline}</Tagline>
          <TextBox>
            <h4>줄거리</h4>
            <OverView>{data.overview}</OverView>
          </TextBox>
          <TextBox>
            <h4>등장인물</h4>
            <CastContainer>
              {data.casts.map((item, i) => {
                if (!onMedia) {
                  if (i > 2) return null;
                }
                return (
                  <CastBox key={item.name}>
                    <CastsImg src={`${item.profile_path}`} alt="사진" />
                    <CastsName>{item.name}</CastsName>
                    <CastsCha>{item.character} 역</CastsCha>
                  </CastBox>
                );
              })}
            </CastContainer>
          </TextBox>
          <TextBox>
            <h4>예고편</h4>
            <VideosContainer>
              {data.videos.length === 0 && <p>예고편이 없습니다..</p>}
              {data.videos.map((item, i) => {
                if (!onMedia) {
                  if (i > 1) return null;
                }
                return (
                  <Videosbox key={item.key}>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={`${item.key}`}
                    >
                      <Video src={`${item.thumbnail}`} alt="썸네일" />
                    </a>
                  </Videosbox>
                );
              })}
            </VideosContainer>
          </TextBox>
          <TextBox>
            <h4>비슷한 영화들</h4>
            <SimilarContainer>
              {data.similars.length === 0 && <p>비슷한 영화가 없습니다..</p>}
              {data.similars.map((item, i) => {
                return (
                  <Link
                    key={item.id}
                    href="/detail/[id]"
                    as={`/detail/${item.id}`}
                  >
                    <SimilarBox>
                      <Similaritem src={`${item.poster_path}`} alt="포스터" />
                      <SimilarTitle>{item.title}</SimilarTitle>
                    </SimilarBox>
                  </Link>
                );
              })}
            </SimilarContainer>
          </TextBox>
        </Container>
      </Layout>
    </>
  );
};
export default Detail;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const res = await detailApi(id);
  const data = res;

  return {
    props: {
      data: data,
    },
  };
}

const SimilarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media ${(props) => props.theme.tablet} {
    flex-direction: row;
    justify-content: space-around;
  }
  @media ${(props) => props.theme.desktop} {
  }
  margin-bottom: 60px;
`;

const Similaritem = styled.img`
  border-radius: 10px;
  width: 200px;
  height: 300px;
  box-shadow: 4px 4px 14px 4px #cbcbcb;
`;
const SimilarBox = styled.div`
  margin-top: 20px;
  border-radius: 10px;
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SimilarTitle = styled.h4`
  font-size: 14px;
  padding-top: 20px;
`;

const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  @media ${(props) => props.theme.tablet} {
    flex-direction: row;
    justify-content: space-around;
  }
  @media ${(props) => props.theme.desktop} {
  }
`;
const Videosbox = styled.div`
  margin-top: 10px;
`;

const Video = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 200px;
  @media ${(props) => props.theme.tablet} {
    width: 250px;
    height: 150px;
  }
  @media ${(props) => props.theme.desktop} {
    width: 320px;
    height: 200px;
  }
`;

const CastContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 20px;
`;
const CastBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CastsImg = styled.img`
  width: 80px;
  height: 130px;
  border-radius: 10px;
  box-shadow: 4px 4px 14px 4px #cbcbcb;
  @media ${(props) => props.theme.tablet} {
    width: 100px;
    height: 150px;
  }
  @media ${(props) => props.theme.desktop} {
    width: 150px;
    height: 200px;
  }
`;
const CastsName = styled.h5`
  font-size: 12px;
  padding: 20px 0 10px;
  @media ${(props) => props.theme.tablet} {
    font-size: 16px;
  }
  @media ${(props) => props.theme.desktop} {
    font-size: 18px;
  }
`;
const CastsCha = styled.p`
  font-size: 10px;
  @media ${(props) => props.theme.tablet} {
    font-size: 14px;
  }
  @media ${(props) => props.theme.desktop} {
    font-size: 16px;
  }
`;

const SubTitleBox = styled.div`
  display: flex;
`;

const Title = styled.h2`
  margin-top: 20px;
`;
const Tagline = styled.p`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 400;
`;
const Gens = styled.p`
  margin-top: 10px;
  font-size: 12px;
  margin-left: 10px;
`;
const OverView = styled.p`
  display: inline-block;
  margin-top: 15px;
  width: 100%;
  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
`;

const Poster = styled.img`
  margin-top: -150px;
  width: 180px;
  height: 250px;
  border-radius: 5px;
  box-shadow: 2px 2px 16px 2px #00000094;
`;

const Bg = styled.div`
  /* position: fixed; */
  width: 100%;
  height: 400px;
  background: ${(props) => `center / cover no-repeat url(${props.URL})`};
  @media ${(props) => props.theme.mobile} {
  }
  @media ${(props) => props.theme.tablet} {
  }
  @media ${(props) => props.theme.desktop} {
    height: 500px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.tablet} {
    h4 {
      font-size: 30px;
    }
  }
  @media ${(props) => props.theme.desktop} {
    h4 {
      margin-top: 30px;
      font-size: 30px;
    }
  }
`;
const TextBox = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 20px;
`;
