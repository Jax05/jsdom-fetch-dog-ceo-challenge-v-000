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
  console.log(json);
}
