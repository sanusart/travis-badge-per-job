/*
// URL: /?repo=Gisto/Gisto&job=1&style=flat-square&label=OSX%20build
*/

const url = new URL(document.location.href);
const colorSuccess = 'green';
const colorFailure = 'red';
const content = url.searchParams.get("content");
const repo = url.searchParams.get("repo");
const jobNumber = url.searchParams.get("job");
const style = url.searchParams.get("style") || 'flat-square';
const label = url.searchParams.get("label") || 'build';

const shieldIo = (color, outcome) => `https://img.shields.io/badge/${label}-${content || outcome}-${color}.svg?longCache=true&style=${style}&label=${label}`;

fetch('https://api.travis-ci.org/repos/' + repo).then((res) => res.json()).then((build) => {
  fetch('https://api.travis-ci.org/builds/' + build.id).then((res) => res.json()).then((travis) => {
    if(travis.matrix[jobNumber].result === 0) {
      console.log(shieldIo(colorSuccess, 'success'));
    } else if(travis.matrix[jobNumber].result === 1) {
      console.log(shieldIo(colorFailure, 'fail'));
    } else {
      console.log(shieldIo(colorFailure, 'unknown'))
    }
  });
});