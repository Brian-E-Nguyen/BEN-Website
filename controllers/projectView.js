const CONFIG = require('../config.json');

module.exports.yelpcamp = (req, res) => {
    res.render(CONFIG.project.yelpcamp.route, {title: CONFIG.project.yelpcamp.title})
}
module.exports.personalwebsite = (req, res) => {
    res.render(CONFIG.project.personalwebsite.route, {title: CONFIG.project.personalwebsite.title})
}
module.exports.krakenbracket = (req, res) => {
    res.render(CONFIG.project.krakenbracket.route, {title: CONFIG.project.krakenbracket.title})
}
module.exports.ee381 = (req, res) => {
    res.render(CONFIG.project.ee381.route, {title: CONFIG.project.ee381.title})
}
module.exports.simd = (req, res) => {
    res.render(CONFIG.project.simd.route, {title: CONFIG.project.simd.title})
}