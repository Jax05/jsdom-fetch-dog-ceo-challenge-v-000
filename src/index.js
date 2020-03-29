console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', (event) => {
  // do stuff
});

function doChallengeOne() {
  const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';

  fetch(imgUrl)
    .then((response) => response.json())
    .then((json) => {
      
    });
}