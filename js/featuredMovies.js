getFeaturedMovies().then((movies) => renderFeaturedMovies(movies));

const renderFeaturedMovies = (movies) => {
  const html = movies
    .map(
      (movie) => `
      <li class="splide__slide">
      <div class="featured" style="background-image: url(${movie.poster});">
      <div class="header">
      ${renderGenres(movie)}
      ${renderRating(movie)}
        <h1 class="title">${movie.title}</h1>
        <span class="lead"
          >${movie.description}</span
        >
        <button class="button">Watch Now</button>
      </div>
    </div>`
    )
    .join("");

  document.getElementById("splide_list").innerHTML = html;
  new Splide(".splide").mount();
};
