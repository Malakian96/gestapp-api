import * as express from 'express';
export const userRoutes = express.Router();

/**
 * @swagger
 * /hello:
 *   get:
 *     summary: hello world
 *     description: says hello world :)
*/
userRoutes.get('/hello', (_, res) => {
    res.send('Hello world!');
});