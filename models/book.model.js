var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var publishersSchema = new Schema{
	name: String
	}

var booktitle = new Schema {
	publisherName : String,
	bookTitle : String,
	issueNumber : Number,
	Value : Number,
	marketValue : Number,
	purchasedDate : {type: Date, default: Date}
	notes : String,
	bookCondition : String
	}


module.exports = mongoose.model('publish', publishersSchema);


somecontroller.js
var publishment = require(../book.model.js');
exports.create = function(req, res){
var newPub = new publishment (name:"marvel");
	newPub.save(callback);
}