// Dependencias
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import open from 'open';
import exphbs from 'express-handlebars';

//webpack configuration
import webpackConfig from '../../webpack.config.babel';

//API
import blogApi from './api/blog';

//Helpers
import * as hbsHelper from '../lib/handlebars';

//Utils
import { isMobile } from '../lib/utils/device';

//Server Port
const port = 3001;

//Enviroment
const isDevelopment = process.env.NODE_ENV !== 'production';

//Express app
const app = express();

//Public
app.use( express.static( path.join(__dirname, '../public')));

//Handlebars setup
app.engine('.hbs', exphbs({
    extname : '.hbs',
    helpers : hbsHelper
}));

//View Engine Setup
app.set( 'views', path.join( __dirname, './views'));
app.set( 'view engine ', '.hbs');

//Webpack compiler
const webpackCompiler = webpack( webpackConfig );

//Webpack middleware
if( isDevelopment){
    app.use(webpackDevMiddleware( webpackCompiler ));
    app.use(webpackHotMiddleware( webpackCompiler ));
}

//Device detector

app.use( ( req, res, next ) => {
    res.locals.isMobile = isMobile(req.headers['user-agent']);
    return next();
});

//API Dispatch
app.use('/api/blog', blogApi);

//Sending all trafict to React
app.get('*', ( req, res ) => {
    //Con Handlebars
    res.render( 'frontend/index', {
        layout : false
    });

    //Sin handlebars
    // res.sendFile(path.join(__dirname, '../public/index.html'));
});

//Listen port
app.listen( port, err => {
    if( !err ){
        open(`http:localhost:${port}`);
    }
});
