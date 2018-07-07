# Travis-ci status badge per job in a matrix

> Travis-ci status badge per job in a matrix using https://shields.io/ underneath

## Usage 

Example of travice-ci a build matrix configured for 2 builds:

```
...

matrix:
  include:
  - os: osx
    osx_image: xcode9.3
    language: node_js
    node_js: "10"

  - os: linux
    services: docker
    language: generic

...
```

![OSX%20build](https://travis-badge-per-job.herokuapp.com/?repo=Gisto/Gisto&job=1&style=flat-square&label=OSX%20build) - produced by `https://travis-badge-per-job.herokuapp.com/?repo=Gisto/Gisto&job=1&style=flat-square&label=OSX%20build`
 
 ![Linux%20build](https://travis-badge-per-job.herokuapp.com/?repo=Gisto/Gisto&job=2&style=flat-square&label=Linux%20build) - produced by `https://travis-badge-per-job.herokuapp.com/?repo=Gisto/Gisto&job=2&style=flat-square&label=Linux%20build`

## Params

**repo** - github repository in format of `Owner/Name`

**job** - job number in travis-ci

**style** - button style in https://shields.io/#styles format

**label** - label for the left part of the badge

---

Deploy to your own heroky if you wish:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## License
[MIT](https://github.com/sanusart/travis-badge-per-job/blob/master/LICENSE)