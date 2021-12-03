const CONFIG = require('../config.json');

const project = CONFIG.project;

module.exports.csulbtc = (req, res) => {
  res.render(project.csulbtc.route, { title: project.csulbtc.title });
};
module.exports.yelpcamp = (req, res) => {
  res.render(project.yelpcamp.route, { title: project.yelpcamp.title });
};
module.exports.personalwebsite = (req, res) => {
  res.render(project.personalwebsite.route, {
    title: project.personalwebsite.title,
  });
};
module.exports.krakenbracket = (req, res) => {
  res.render(project.krakenbracket.route, {
    title: project.krakenbracket.title,
  });
};
module.exports.ee381 = (req, res) => {
  res.render(project.ee381.route, { title: project.ee381.title });
};
module.exports.simd = (req, res) => {
  res.render(project.simd.route, { title: project.simd.title });
};
