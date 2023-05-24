import * as bodyParser from 'body-parser';
import * as express from 'express';
import { APILogger } from './logger/api.logger';
import { UserController } from './controller/user.controller';
import * as swaggerUi from 'swagger-ui-express';
import 'dotenv/config';
import 'swagger-jsdoc';
import * as swaggerJSDoc from 'swagger-jsdoc';
import { routes } from './routes/index';

class App {

  public express: express.Application;
  public logger: APILogger;
  public userController: UserController;

  /* Swagger files start */
  private swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Express API for JSONPlaceholder',
      version: '1.0.0',
      description:
        'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
      license: {
        name: 'Licensed Under MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'JSONPlaceholder',
        url: 'https://jsonplaceholder.typicode.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  };
  private options = {
    swaggerDefinition: this.swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./routes/*.ts'],
  };
  private swaggerSpec = swaggerJSDoc(this.options);
  /* Swagger files end */

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.logger = new APILogger();
    this.userController = new UserController();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {

    this.express.use('/api', routes);
    this.express.use('/api/docs', swaggerUi.serve, swaggerUi.setup(this.swaggerSpec));

    // handle undefined routes
    this.express.use('*', (_, res) => {
        res.send('Make sure url is correct!!!');
    });
  }
}

export default new App().express;