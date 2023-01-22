const BASE_URL = "http://localhost:3004";
const URL_NEW_RELEASES = `${BASE_URL}/newRelease`;
const URL_FEATURED = `${BASE_URL}/featuredMovie`;
const URL_TV = `${BASE_URL}/tvShow`;

function getResponse(res) {
  if (!res?.ok) {
    throw new Error("Hata: ", { cause: res });
  } else {
    return res.json();
  }
}

function getFeaturedMovies() {
  return fetch(URL_FEATURED).then((res) => getResponse(res));
}

function getNewReleases() {
  return fetch(URL_NEW_RELEASES).then((res) => getResponse(res));
}
function getTvShows() {
  return fetch(URL_TV).then((res) => getResponse(res));
}
