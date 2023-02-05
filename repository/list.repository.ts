import { connect } from "../config/db.config";
import { APILogger } from '../logger/api.logger';
import { List } from "../models/list.model";

export class ListRepository {

    private logger: APILogger;
    private db: any = {};
    private ListRespository: any;

    constructor() {
        this.db = connect();
        // For Development
        // this.db.sequelize.sync({ force: true }).then(() => {
        //     console.log("Drop and re-sync db.");
        // });
        this.ListRespository = this.db.sequelize.getRepository(List);
    }

    async getLists() {
        
        try {
            const lists = await this.ListRespository.findAll();
            console.log('lists:::', lists);
            return lists;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createList(list) {
        let data = {};
        try {
            list.createdate = new Date().toISOString();
            data = await this.ListRespository.create(list);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

    async updateList(list) {
        let data = {};
        try {
            list.updateddate = new Date().toISOString();
            data = await this.ListRespository.update({...list}, {
                where: {
                    id: list.id
                }
            });
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

    async deleteList(listId) {
        let data = {};
        try {
            data = await this.ListRespository.destroy({
                where: {
                    id: listId
                }
            });
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

}