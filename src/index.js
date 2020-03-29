document.addEventListener('DOMContentLoaded', (event) => {
  doChallengeOne();
  doChallengeTwo();
  doChallengeThree();
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
  const breeds = json.message;
  const breedsContainer = document.getElementById('dog-breeds');

  for (const breed in breeds) {
    const listElement = document.createElement('li');
    listElement.innerText = breed;

    breedsContainer.append(listElement);
  }
}

function doChallengeThree() {
  const breed = document.getElementsbyTypeName('li');
  console.log(breed);
}
