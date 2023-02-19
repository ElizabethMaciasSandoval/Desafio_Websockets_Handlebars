import { Product } from "../models/Product.model.js";
import { v4 as code } from 'uuid';
export class ProductManager {

  async addProduct(product){
    try {
      product.code = code();
      await Product.create(product);
    } catch (error) {
      console.log(error);
    }
  }

  async getProducts(){
    try {
      const products = await Product.find();
      return products
    } catch (error) {
      console.log(error);
    }
  }

  async getProductById(idProduct){
    try {
      const productById = await Product.findOne({_id: idProduct});
      return productById
    } catch (error) {
      console.log(error);
    }
  }

  async updateProduct(id, product){
    try {
      await Product.findOneAndUpdate({_id: id}, product)
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProduct(id){
    try {
      await Product.findOneAndDelete({_id: id})
    } catch (error) {
      console.log(error);
    }
  }
}
