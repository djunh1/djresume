'use strict';

var express = require('express');
var blog = require('./blog.controller');
var user = require('../user/user.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

//router.get('/', controller.index);
//router.get('/:id', controller.show);
//router.post('/', controller.create);
//router.put('/:id', controller.update);
//router.patch('/:id', controller.update);
//router.delete('/:id', controller.destroy, blog.hasAuthorization, );

router.get('/', blog.index);
router.post('/', blog.create );
	

router.get('/:blogId', blog.read);
router.put('/:blogId' ,blog.update);
router.delete('/:blogId',blog.destroy);

router.param('blogId', blog.blogById);



module.exports = router;