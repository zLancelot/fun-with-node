import express from 'express';
import bodyParser from 'body-parser';
import * as Modules from './modules';

const app = express()
    .use( bodyParser.json() )
    .use( bodyParser.urlencoded({ extended: true }) );
    
const port = process.env.PORT || 3000;

Object.values( Modules ).forEach( Route => app.use(Route.base, Route.router) );

export { app, port }