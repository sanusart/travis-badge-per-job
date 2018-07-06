
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, "public")))
  .get("/", (req, res) => res.redirect('https://img.shields.io/badge/hi-poopoo-red.svg?longCache=true&style=flat-square&label=build'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));


// return 'https://img.shields.io/badge/hi-poopoo-red.svg?longCache=true&style=flat-square&label=build';

// const query = request.query;

// const colorSuccess = 'green';
// const colorFailure = 'red';
// const content = query.content || 'unknown';
// const repo = query.repo;
// const jobNumber = query.job;
// const style = query.style || 'flat-square';
// const label = query.label || 'build';

// const shieldIo = (color, outcome) => 
// `https://img.shields.io/badge/${label}-${content || outcome}-${color}.svg?longCache=true&style=${style}&label=${label}`;

// fetch('https://api.travis-ci.org/repos/' + repo).then((res) => res.json()).then((build) => {
//   fetch('https://api.travis-ci.org/builds/' + build.id).then((res) => res.json()).then((travis) => {
//     if(travis.matrix[jobNumber].result === 0) {
//       return shieldIo(colorSuccess, 'success');
//     } else if(travis.matrix[jobNumber].result === 1) {
//       return shieldIo(colorFailure, 'fail');
//     } else {
//       return shieldIo(colorFailure, 'unknown');
//     }
//   });
// });
//   }
// });