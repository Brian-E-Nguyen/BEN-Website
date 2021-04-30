const CONFIG = require('../config.json');

module.exports.privacy = (req, res) => {
    res.render(CONFIG.privacy.route, {title: CONFIG.privacy.title})
}