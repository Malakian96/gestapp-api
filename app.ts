import * as bodyParser from "body-parser";
import * as express from "express";
import { APILogger } from "./logger/api.logger";
import { ProductController } from "./controller/product.controller";
import * as swaggerUi from 'swagger-ui-express';
import * as fs from 'fs';
import 'dotenv/config'

class App {

    public express: express.Application;
    public logger: APILogger;
    public productController: ProductController;

    /* Swagger files start */
    private swaggerFile: any = (process.cwd()+"/swagger/swagger.json");
    private swaggerData: any = fs.readFileSync(this.swaggerFile, 'utf8');
    private customCss: any = fs.readFileSync((process.cwd()+"/swagger/swagger.css"), 'utf8');
    private swaggerDocument = JSON.parse(this.swaggerData);
    /* Swagger files end */


    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new APILogger();
        this.productController = new ProductController();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {

        this.express.get('/api/tasks', (req, res) => {
            this.productController.getProducts().then(data => res.json(data));
        });
        
        this.express.post('/api/task', (req, res) => {
            console.log(req.body);
            this.productController.createProduct(req.body.task).then(data => res.json(data));
        });
        
        this.express.put('/api/task', (req, res) => {
            this.productController.updateProduct(req.body.task).then(data => res.json(data));
        });
        
        this.express.delete('/api/task/:id', (req, res) => {
            this.productController.deleteProduct(req.params.id).then(data => res.json(data));
        });

        // swagger docs
        this.express.use('/api/docs', swaggerUi.serve,
            swaggerUi.setup(this.swaggerDocument, null, null, this.customCss));

        // handle undefined routes
        this.express.use("*", (req, res, next) => {
            res.send("Make sure url is correct!!!");
        });
    }
}

export default new App().express;