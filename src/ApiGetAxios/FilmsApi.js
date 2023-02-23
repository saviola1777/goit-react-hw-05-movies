import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'da5ee886bbaa55afd5554019fa114a27',
  },
})

export const getAxios = async () => {
  const { data } = await instance.get("/trending/movie/week")
  return data
}

export const getPostById = async (id) => {
  const { data } = await instance.get(`/movie/${id}`)
  return data

}

export const getSearchMovies = async (search, page) => {
  const { data } = await instance.get(`/search/movie?query=${search}&page=${page}`)
  return data

}
export const getReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);

  return data.results;   //тут нам требв забрати масив з results тому рлвертаємо data.results
};

export const getCast = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);

  return data.cast;
};


