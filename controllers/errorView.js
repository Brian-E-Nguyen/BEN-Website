const CONFIG = require('../config.json');

module.exports.error = (req, res) => {
    res.render(CONFIG.error.route, {title: CONFIG.error.title})
}