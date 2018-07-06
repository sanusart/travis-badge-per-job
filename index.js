const express = require("express");
require("isomorphic-fetch");
const path = require("path");
const PORT = process.env.PORT || 5000;

express().use(function(req, res, next) {
  res.setHeader('Content-Type', 'image/svg+xml');
  next();
});

express()
  .use(express.static(path.join(__dirname, "public")))
  .get("/", (request, responce) => {
    const query = request.query;
    const colorSuccess = "green";
    const colorFailure = "red";
    const content = query.content;
    const repo = query.repo;
    const jobNumber = query.job;
    const style = query.style || "flat-square";
    const label = query.label || "build";

    const shieldIo = (color, outcome) =>
      `https://img.shields.io/badge/${label}-${content ||
        outcome}-${color}.svg?longCache=true&style=${style}&label=${label}`;

    fetch(`https://api.travis-ci.org/repos/${repo}`)
      .then(res => res.json())
      .then(build => {
        fetch(`https://api.travis-ci.org/builds/${build.id}`)
          .then(res => res.json())
          .then(travis => {
            if (travis.matrix[jobNumber].result === 0) {
              return responce.redirect(shieldIo(colorSuccess, "success"));
            } else if (travis.matrix[jobNumber].result === 1) {
              return responce.redirect(shieldIo(colorFailure, "fail"));
            } else {
              return responce.redirect(shieldIo(colorFailure, "unknown"));
            }
          });
      });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
