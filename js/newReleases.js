getNewReleases()
  .then((releases) => renderNewReleases(releases))
  .catch((e) => {
    renderNewReleases(mockReleases);
  });

const renderNewReleases = (releases) => {
  const html = releases
    .map(
      (release) => `
    <li class="movie-card" style="background-image:url(${release.poster})">
        <div class="description" >
            ${renderGenres(release)}
            ${renderRating(release)}
            <span class="name">${release.title}</span>
        </div>
    </li>`
    )
    .join("");

  document.getElementById("newReleases").innerHTML = html;
};
