module.exports = function(api) {

	var feeds = require('../controllers/feedsController.js')
	
	api.get('/api/feeds/init', feeds.init);
	api.get('/api/feeds', feeds.findAll);
}