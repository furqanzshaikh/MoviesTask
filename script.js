document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("movies");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Form submitted");

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const img = document.getElementById("img").value;
    const rating = document.getElementById("rating").value;

    let movieData = JSON.parse(localStorage.getItem("Movies")) || [];

    const newMovie = {
      name: name,
      date: date,
      img: img,
      rating: rating,
    };

    movieData.push(newMovie);

    localStorage.setItem("Movies", JSON.stringify(movieData));

    form.reset();
    alert("Movie Added Successfully");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const movieData = JSON.parse(localStorage.getItem("Movies")) || [];

  const movieContainer = document.getElementById("movieContainer");

  movieData.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = movie.img;
    img.alt = "Movie img";

    const nameSpan = document.createElement("span");
    nameSpan.textContent = "Name: " + movie.name;

    const dateSpan = document.createElement("span");
    dateSpan.textContent = "Date: " + movie.date;

    const ratingSpan = document.createElement("span");
    ratingSpan.textContent = "IMDb: " + movie.rating;

    card.appendChild(img);
    card.appendChild(nameSpan);
    card.appendChild(dateSpan);
    card.appendChild(ratingSpan);

    movieContainer.appendChild(card);
  });
});
