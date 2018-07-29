const Product = require('../models/postsModel.js');
const mongoose = require('mongoose'), Schema = mongoose.Schema;

const FeedSchema = mongoose.Schema({
	name: String,
    url: String
});

module.exports = mongoose.model('Feed', FeedSchema);