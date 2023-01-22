const BASE_URL = "http://localhost:3004";
const URL_NEW_RELEASES = `${BASE_URL}/newRelease`;
const URL_FEATURED = `${BASE_URL}/featuredMovie`;
const URL_TV = `${BASE_URL}/tvShow`;

function getFeaturedMovies() {
  return fetch(URL_FEATURED)
    .then((res) => res.json())
    .catch((error) => error);
}

function getNewReleases() {
  return fetch(URL_NEW_RELEASES)
    .then((res) => res.json())
    .catch((error) => error);
}
function getTvShows() {
  return fetch(URL_TV)
    .then((res) => res.json())
    .catch((error) => error);
}
