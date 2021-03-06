//
// Utilites used pretty frequently:
//
//
// Imports:
//

import { x, y } from './../index.js';

// set a given viewBox's values based on the client width and height
//
const setViewBox = function(container) {
  container.setAttribute('viewBox', `0 0 ${x} ${y}`);
  container.setAttribute('height', `${y}`);
  container.setAttribute('width', `${x}`);
};

//
// Random numbers
//

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandom(max, min) {
  return Math.random() * (max - min) + min;
}

//
// Remove any SVG Shape from the parent container
//

const removeShapes = function(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

export { getRandomInt, getRandom, setViewBox, removeShapes };
