//code to create web server
const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const Post = require('../models/post');
const commentsController = require('../controllers/comments_controller');
const passport = require('passport');

