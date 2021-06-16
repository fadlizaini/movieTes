import http from "../../http";
const SearchMovie = t => {
  return http.get(`?apikey=faf7e5bb&s=${t}&page=1`);
};
export const PageMovie = (t, p) => {
  return http.get(`?apikey=faf7e5bb&s=${t}&page=${p}`);
};

export const movieById =(i)=>{
  return http.get(`?apikey=faf7e5bb&i=${i}`);
}

export default SearchMovie