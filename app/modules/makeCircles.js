import { getRandomInt, getRandom } from './getRandomInt.js';
import { x, y, r } from './../index.js';

const clipPathContainer = document.getElementById('clippingPath');
const testCont = document.getElementById('circleContainer');

const removeCircles = function(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

const makeCircles = function(numberOfCircles, container) {
  for (let i = 0; i < numberOfCircles; i++) {
    const newCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    newCircle.setAttribute('cx', getRandomInt(x));
    newCircle.setAttribute('cy', getRandomInt(y));
    newCircle.setAttribute('r', getRandomInt(r));
    newCircle.style.fill = `hsla(${getRandomInt(360)},${getRandomInt(100)}%, ${getRandomInt(100)}%, ${getRandom(
      1,
      0.25,
    )})`;
    container.appendChild(newCircle);
  }
};

export { clipPathContainer, makeCircles, removeCircles, testCont };
