const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';

document.addEventListener('DOMContentLoaded', (event) => {
  doChallengeOne();
});

function doChallengeOne() {
  fetch(imgUrl)
    .then((response) => response.json())
    .then((json) => {
      addImagesToDOM(json);
    });
}

function addImagesToDOM(json) {
  console.log(json);
}
