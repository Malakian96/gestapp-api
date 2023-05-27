
/**
 * @swagger
 * components:
 *   schemas:
 *     UserLogin:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: The user's email.
 *           example: wiwi@gulugulu.com
 *         password:
 *           type: string
 *           description: The user's password.
 *           example: wiwi1234
 */
export class UserLoginDto{
    
    email: string;

    password: string;
    
}