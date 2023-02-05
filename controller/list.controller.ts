import { APILogger } from '../logger/api.logger';
import { ListService } from '../service/list.service';

export class ListController {

    private listService: ListService;
    private logger: APILogger;

    constructor() {
        this.listService = new ListService();
        this.logger = new APILogger()
    }

    async getLists() {
        this.logger.info('Controller: getLists', null)
        return await this.listService.getLists();
    }

    async createList(list) {
        this.logger.info('Controller: createList', list);
        return await this.listService.createList(list);
    }

    async updateList(list) {
        this.logger.info('Controller: updateList', list);
        return await this.listService.updateList(list);
    }

    async deleteList(listId) {
        this.logger.info('Controller: deleteList', listId);
        return await this.listService.deleteList(listId);
    }
}