import { APILogger } from '../logger/api.logger';
import { ProductService } from '../service/product.service';

export class ProductController {

    private productService: ProductService;
    private logger: APILogger;

    constructor() {
        this.productService = new ProductService();
        this.logger = new APILogger()
    }

    async getProducts() {
        this.logger.info('Controller: getProducts', null)
        return await this.productService.getProducts();
    }

    async createProduct(product) {
        this.logger.info('Controller: createProduct', product);
        return await this.productService.createProduct(product);
    }

    async updateProduct(product) {
        this.logger.info('Controller: updateProduct', product);
        return await this.productService.updateProduct(product);
    }

    async deleteProduct(productId) {
        this.logger.info('Controller: deleteProduct', productId);
        return await this.productService.deleteProduct(productId);
    }
}