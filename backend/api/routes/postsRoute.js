module.exports = function(api) {
    var posts = require('../controllers/postsController.js');
	
	api.get('/api/posts', posts.findAll);
			
	
    api.get('/api/posts/feed/:feedId', posts.findByfeedId);
}