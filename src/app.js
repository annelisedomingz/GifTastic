function search(gifName) {
  let apiKey = "6IRRJvAoorEwG3Guy4NX48OEeeW5ZxQf";
  let apiUrl = `https://api.giphy.com/v1/gifs/search?=api_key=${apiKey}&q=${gifName}`;

  axios.get(apiUrl).then(showGif);
}

function showGif(gifData) {
  console.log(gifData);
}

search("Aliens");
