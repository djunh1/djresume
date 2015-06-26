'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BlogSchema = new Schema({
	created: {
		type:Date,
		default: Date.now
	},
	title:{
		type: String,
		default: '',
		trim:false,
		required: 'Title can not be blank'
	},
	content: {
		type:String,
		default: '',
		trim: false
	},
	creator: {
		type:Schema.ObjectId,
		ref: 'User'
	}
});

module.exports = mongoose.model('Blog', BlogSchema);