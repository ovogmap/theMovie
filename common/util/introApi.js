import fetchData from "./index";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "1d3ad3a1e497c9afbe443d1443905c3f";
const LANGUAGE = "ko-KR";
const IMG_PATH = "https://image.tmdb.org/t/p/original/";

export default async function introApi() {
  let result = await axios
    .get(
      `${BASE_URL}trending/movie/week?api_key=${API_KEY}&language=${LANGUAGE}`
    )
    .then((response) => response);
  result = result.data.results;
  let id = result[Math.floor(Math.random() * result.length)].id;

  const response = await fetchData(`${id}`);
  const introMovie = response.data;
  let randomMivie = {
    backdropPath: `${IMG_PATH}${introMovie.backdrop_path}`,
    title: introMovie.title,
    tagline: introMovie.tagline,
    id: introMovie.id,
  };

  return randomMivie;
}
