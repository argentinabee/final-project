// GIPHY API key from starter code
const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

// Select elements from the page
const form = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const gifContainer = document.querySelector("#gif-container");
const removeButton = document.querySelector("#remove-gifs");

// Listen for form submit
form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const searchTerm = searchInput.value;

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      api_key: giphyApiKey,
      q: searchTerm,
      limit: 25
    }
  });

  addGif(response.data.data);

  searchInput.value = "";
});

// Function to add one GIF to the page
function addGif(gifs) {
  const randomIndex = Math.floor(Math.random() * gifs.length);
  const gifUrl = gifs[randomIndex].images.downsized.url;

  const newGif = document.createElement("img");
  newGif.src = gifUrl;

  gifContainer.appendChild(newGif);
}

// Remove all GIFs
removeButton.addEventListener("click", function () {
  gifContainer.innerHTML = "";
});
