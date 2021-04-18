const CONFIG = require('../config.json');

module.exports.yelpcamp = (req, res) => {
    res.render(CONFIG.yelpcamp.route, {title: CONFIG.yelpcamp.title})
}
module.exports.personalwebsite = (req, res) => {
    res.render(CONFIG.personalwebsite.route, {title: CONFIG.personalwebsite.title})
}
module.exports.krakenbracket = (req, res) => {
    res.render(CONFIG.krakenbracket.route, {title: CONFIG.krakenbracket.title})
}
module.exports.ee381 = (req, res) => {
    res.render(CONFIG.ee381.route, {title: CONFIG.ee381.title})
}
module.exports.simd = (req, res) => {
    res.render(CONFIG.simd.route, {title: CONFIG.simd.title})
}