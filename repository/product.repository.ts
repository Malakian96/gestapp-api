import { connect } from "../config/db.config";
import { APILogger } from '../logger/api.logger';
import { Product } from "../models/product.model";

export class ProductRepository {

    private logger: APILogger;
    private db: any = {};
    private productRespository: any;

    constructor() {
        this.db = connect();
        // For Development
        // this.db.sequelize.sync({ force: true }).then(() => {
        //     console.log("Drop and re-sync db.");
        // });
        this.productRespository = this.db.sequelize.getRepository(Product);
    }

    async getProducts() {
        
        try {
            const tasks = await this.productRespository.findAll();
            console.log('tasks:::', tasks);
            return tasks;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createProduct(task) {
        let data = {};
        try {
            task.createdate = new Date().toISOString();
            data = await this.productRespository.create(task);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

    async updateProduct(task) {
        let data = {};
        try {
            task.updateddate = new Date().toISOString();
            data = await this.productRespository.update({...task}, {
                where: {
                    id: task.id
                }
            });
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

    async deleteProduct(taskId) {
        let data = {};
        try {
            data = await this.productRespository.destroy({
                where: {
                    id: taskId
                }
            });
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

}