import { Router } from 'express';

const router = Router();

router.get("/", 
    (req, res, next) => {
        res.status(200).send("Olá, estou funcionando!!!");
    }
)

router.use((req, res) => {res.status(404).send("Route Not Found")});

export default {base:"/", router}