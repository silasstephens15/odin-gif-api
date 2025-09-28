const img = document.querySelector("img");
const button = document.querySelector("button");
const input = document.querySelector("input");
input.value = "";
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
function search() {
  const search = input.value;
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=oFYJzNY5lnXdZONrmxJVCCaIib10X1ss&q=${search}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      if (response.meta.status === 200 && response.data.length > 0) {
        img.src = response.data["0"].images.original.url;
      } else {
        console.log("error");
      }
    });
}

button.addEventListener("click", newGif);
input.addEventListener("change", search);
