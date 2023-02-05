import { ListRepository } from '../repository/list.repository';

export class ListService {

    private listRepository: ListRepository;

    constructor() {
        this.listRepository = new ListRepository();
    }

    async getLists() {
        return await this.listRepository.getLists();
    }

    async createList(list) {
        return await this.listRepository.createList(list);
    }

    async updateList(list) {
        return await this.listRepository.updateList(list);
    }

    async deleteList(listId) {
        return await this.listRepository.deleteList(listId);
    }

}