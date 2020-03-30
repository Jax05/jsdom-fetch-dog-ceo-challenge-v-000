const breedsContainer = document.getElementById('dog-breeds');

document.addEventListener('DOMContentLoaded', (event) => {
  doChallengeOne();
  doChallengeTwo();
  doChallengeThree();
  doChallengeFour();
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

  for (const breed in breeds) {
    const listElement = document.createElement('li');
    listElement.innerText = breed;

    breedsContainer.append(listElement);
  }
}

function doChallengeThree() {
  const liElements = document.getElementsByTagName('li');

  for (const li in liElements) {
    document.addEventListener('click', function(event) {
      event.target.style.color = 'green';
    });
  }
}

function doChallengeFour() {
  const breedFilter = document.getElementById('breed-dropdown');

  breedFilter.addEventListener('change', function(event) {
    console.log(event.target.value);
  });
}
