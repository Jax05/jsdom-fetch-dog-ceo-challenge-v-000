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
    imgElement.style.height = '100px';
    imgElement.style.width = 'auto';

    dogImageContainer.append(imgElement);
  }
}

function doChallengeTwo() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';

  fetch(breedUrl)
    .then((response) => response.json())
    .then((json) => {
      addBreedsToDOM(json);
    });
}

function addBreedsToDOM(json) {

}
