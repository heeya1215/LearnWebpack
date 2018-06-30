// index.js
// import & export is ES6 that doesn't work in the browser
// but webpack would replace them with compatible wrapper code
import _ from 'lodash';

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());
