import React, { useEffect } from "react";
import styled from "styled-components";
import { onLoading, getData, onError } from "../common/modules/home";
import { useSelector, useDispatch } from "react-redux";
import introApi from "../common/util/introApi";
const Home = () => {
  const { result, loading, erroe } = useSelector((state) => state.Home);
  console.log(result);
  const dispatch = useDispatch();
  const getIntroMovie = async () => {
    dispatch(onLoading());
    try {
      const result = await introApi();
      dispatch(getData(result));
    } catch (e) {
      dispatch(onError(e));
    }
  };
  useEffect(() => {
    getIntroMovie();
  }, []);
  if (loading) return null;
  return (
    <Container>
      <ImgBox>
        <h2>오늘의 추천 영화</h2>
        <h2>{result?.title}</h2>
        <h2>보러가기</h2>
      </ImgBox>
    </Container>
  );
};
export default Home;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 50px;
  left: 0;
`;
const ImgBox = styled.div`
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
