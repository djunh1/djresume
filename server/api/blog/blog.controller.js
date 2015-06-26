'use strict';

var _ = require('lodash');
var Blog = require('./blog.model');

// Get list of blogs -edited this. 
exports.index = function(req, res) {
  Blog.find().sort('-created').populate('creator', 'name').exec(function (err, blogs) {
    if(err) { return handleError(res, err); }
    return res.json(200, blogs);
  });
};

// read function

exports.read=function(req,res){
  res.json(req.blog);
}

// Get a single blog -edited 
exports.show = function(req, res) {
  Blog.findById(req.params.id).populate('creator', 'name').exec(function (err, blog) {
    if(err) { return handleError(res, err); }
    if(!blog) { return res.send(404); }
    return res.json(blog);
  });
};

// authorization middle ware to ensure user is creator of article

exports.hasAuthorization= function(req,res,next){
  if(req.blog.creator.id!== req.user.id){
    return res.status(403).send({
      message: 'User is unassisted'
    });
  }
  next();
};

// Also added this 

exports.blogById= function(req,res,next,id){
  Blog.findById(id).populate('creator', 'name').exec(function(err, blog) {
    if(err) return next(err);
    if(!blog) return next(new Error (' failed to lod the blog entry ' + id));
    req.blog=blog;
    next();
  });
};

// Creates a new blog in the DB.
exports.create = function(req, res) {
  var blog=new Blog(req.body);
  blog.creator=req.user;

  blog.save(function(err) {
    if(err) { return res.status(400).send({
      message: "Could not save the Blog Entry"
    });
    } else {
     res.json(blog);
   }
  });
};

// Updates an existing blog in the DB.  added to this

exports.update = function(req, res) {
  var blog=req.blog;
  blog.title=req.body.title;
  blog.content=req.body.content;
  blog.save(function(err) {
    if(err) {
      return res.status(400).send({
        message: 'Fucked up'
      });
    } else {
      res.json(blog);
    }
  });
};

// Deletes a blog from the DB.
exports.destroy = function(req, res) {
  var blog=req.blog;
  blog.remove(function(err){
    if(err){
      return res.status(400).send({
        message: "Can not delete"
      });
    } else {
      res.json(blog);
    }
  });
};

function handleError(res, err) {
  return res.send(500, err);
}