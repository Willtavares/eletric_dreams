const Company = require('../models/feedsModel.js');
const mongoose = require('mongoose'), Schema = mongoose.Schema;

const PostSchema = mongoose.Schema({
    title: String,
    text: String,
    url: String,
    read: Boolean,
	feed : { type: Schema.Types.ObjectId, ref: 'Feed' }
});

module.exports = mongoose.model('Post', PostSchema);