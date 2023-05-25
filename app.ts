import 'dotenv/config';
import 'swagger-jsdoc';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerJSDoc from 'swagger-jsdoc';
import { APILogger } from './resources/logger/api.logger';
import { routes } from './src/routes/index';
import { options } from './config/swaggerDefinition';

class App {

  public express: express.Application;
  public logger: APILogger;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.logger = new APILogger();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {

    this.express.use('/api', routes);
    this.express.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

    // handle undefined routes
    this.express.use('*', (_, res) => {
      res.send('Make sure url is correct!!!');
    });
  }
}

export default new App().express;