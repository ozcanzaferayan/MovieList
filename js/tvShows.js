getTvShows()
  .then((shows) => renderTvShows(shows))
  .catch((e) => {
    renderTvShows(mockTvShows);
  });

const renderTvShows = (shows) => {
  const html = shows
    .map(
      (show) => `
    <li class="movie-card" style="background-image:url(${show.poster})">
        <div class="description" >
            ${renderGenres(show)}
            ${renderRating(show)}
            <span class="name">${show.title}</span>
        </div>
    </li>`
    )
    .join("");

  document.getElementById("featuredTvShows").innerHTML = html;
};
