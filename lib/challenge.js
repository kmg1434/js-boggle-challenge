'use strict';

const convert = function (coord) {
  return ((coord[0]) * 4) + coord[1];
};

const listToCoord = function (list) {

  let coord = [];

  for (let i = 0; i < list.length; i++) {
    coord[i] = convert(list[i]);
  }

  return coord;
};

const boggle = function boggle(tray, list) {
  let concat = ''; // empty string to fill
  let coord = listToCoord(list);

  let i; // goes from 0 to 3
  let k; // goes from 0 to 15

  for (i = 0; i < coord.length; i++) {

    //console.log('i = ' + i);
    for (k = 0; k < tray.length; k++) {

      //console.log('k = ' + k);

      if (k === coord[i]) {
        concat += tray[k];
      }
    }
  }

  return concat;
};

const bigBoggle = function bigBoggle() {};

const superBigBoggle = function superBigBoggle() {};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
