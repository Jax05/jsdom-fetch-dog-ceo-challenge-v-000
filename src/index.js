document.addEventListener('DOMContentLoaded', (event) => {
  doChallengeOne();
});

function doChallengeOne() {
  const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';

  fetch(imgUrl)
    .then((response) => response.json())
    .then((json) => {
      addImagesToDOM(json);
    });
}

function addImagesToDOM(json) {
  const dogImageContainer = document.getElementById('dog-image-container');

  // create img element for each image and add link to element
}
