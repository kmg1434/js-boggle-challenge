'use strict';



const boggle = function boggle(tray, list) {

  let concat = ''; // fill this up to the word

  // convert tray to a 2d array
  if (tray[i] % 4 === 0)

  // run through tray (16 indices)
  for (let i = 0; i < list.length; i++) {
    for (let k = 0; k < list.length; k++) {

      let coordinate = list[i][k];

      if (list[i][k] === coordinate){

        concat += tray[i][k];

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
