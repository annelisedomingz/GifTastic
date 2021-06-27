function search(gifName) {
  let apiKey = "6IRRJvAoorEwG3Guy4NX48OEeeW5ZxQf";
  let apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${gifName}&rating=g`;

  axios.get(apiUrl).then(renderGif);
}

// filterbutton click event

let filterButtons = document.getElementsByClassName("filterButton");

let handleClick = function () {
  let genre = this.innerHTML;
  let genreToSearch = `${genre} movie`;
  search(genreToSearch);
};

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", handleClick, false);
}

// Response to Genre Button

function renderGif(response) {
  console.log(response);
  let gifHTML = `<div class="row">`;
  let gifElement = document.querySelector("#gif-results");
  for (let i = 0; i < response.data.data.length; i++) {
    let currentGif = response.data.data[i].images.fixed_height.url;
    let currentGif_width = response.data.data[i].images.fixed_height.width;
    let currentGif_height = response.data.data[i].images.fixed_height.height;

    gifHTML =
      gifHTML +
      `
<img src="${currentGif}" style="max-width: ${currentGif_width}px;max-height: ${currentGif_height}px;" />
        
      `;
  }
  gifHTML = gifHTML + `</div>`;
  gifElement.innerHTML = gifHTML;
}

//

function searchMovieInput(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-field");
  search(searchInput.value);
}

let changeMovie = document.querySelector(".row.search");
changeMovie.addEventListener("submit", searchMovieInput);

function clearGifs() {
  document.getElementById("gif-results").innerHTML = "";
}

let resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", clearGifs);
