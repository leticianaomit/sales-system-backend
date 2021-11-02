import { Product } from '../core/models/product.model';

export interface ProductRepository {
  addProduct(data: Product): Promise<{ id: Product['id'] }>;
  getAllProducts(): Promise<Product[]>;
  getProductById(id: Product['id']): Promise<Product>;
  updateProduct(id: Product['id'], data: Product): Promise<void>;
  deleteProduct(id: Product['id']): Promise<void>;
}
