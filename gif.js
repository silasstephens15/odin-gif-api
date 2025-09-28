const img = document.querySelector("img");
const button = document.querySelector("button");
function newGif() {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=oFYJzNY5lnXdZONrmxJVCCaIib10X1ss&s=cats"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
}

button.addEventListener("click", newGif);
