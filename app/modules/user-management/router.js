import { Router } from 'express';

const router = Router();

router.get('/students', 
    (req, res, next) => {
        res.status(200).send("GET /students");
    }
)


export default { base: '/', router};