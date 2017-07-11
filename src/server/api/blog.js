//Dependecies
import express from 'express';

//Data
import posts from '../../data/posts.json';
import post from '../../data/post.json';

//Express router
const Router = express.Router();

Router.get( '/posts', ( req, res, next) => {
    res.json( posts );
});

Router.get( '/post', ( req, res, next) => {
    res.json( post );
});

export default Router;