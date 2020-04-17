import express from 'express';
import * as Modules from './modules';

const app = express();
const port = process.env.PORT || 3000;

Object.values( Modules ).forEach( Route => app.use(Route.base, Route.router) );

app.get("/", 
    (req, res, next) => {
        res.status(200).send("Olá, estou funcionando!!!");
    }
)

app.use((req, res) => {res.status(404).send("Route Not Found")});


export { app, port }