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
  const images = json.message;
  const dogImageContainer = document.getElementById('dog-image-container');

  for (const image of images) {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    // dogImageContainer.append(imgElement);
  }
  // create img element for each image and add link to element
}
