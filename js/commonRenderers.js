const renderGenres = (release) => {
  return release.genres
    .map(
      (genre) => `
          <div class="tag">
              <span>${genre}</span>
          </div>`
    )
    .join("");
};

const renderRating = (release) => {
  return (
    `<div class="rating">` +
    '<img src="./icon/star-fill.svg" alt="Star" />'.repeat(release.rating) +
    `</div>`
  );
};
