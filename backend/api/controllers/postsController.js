const Feed = require('../models/feedsModel.js');
const Post = require('../models/postsModel.js');

exports.findAll = (req, res) => {
	
	Post.find()
    .then(posts => {
        res.send(posts);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};


exports.findByfeedId = (req, res) => {
    Post.find({ feed : req.params.feedId })
	.exec(function (err, posts) {
		if (err){
			if(err.kind === 'ObjectId') {
				return res.status(404).send({
					message: "Posts não foram encntradas no Feed Id " + req.params.feedId
				});                
			}
			return res.status(500).send({
				message: "Erro de busca de Post com o Feed Id " + req.params.feedId
			});
		}
					
		res.send(posts);
	});
};