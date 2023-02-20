import { Cart } from "../models/Cart.model.js"

export class CartManager {

  async addCart(){
    try {
      const cart = {
        products: []
      }
      await Cart.create(cart);
    } catch (error) {
      console.log(error);
    }
  }

  async getProductsByCartId (cid){
    try {
      const cart = await Cart.findOne({_id:cid}).populate('products.product');
      return cart.products;
    } catch (error) {
      console.log(error);
    }
  }

  async addProductByCartId (cid, pid) {
    try {
      const cart = await Cart.findOne({_id:cid});
      if (cart.products.length === 0) {
        const product = {
          product: pid,
          quantity: 1
        }
        cart.products.push(product)
      } else {
        const pidExists = cart.products.find(product => product.product == pid);
        if (pidExists === undefined || pidExists === null) {
          const newProduct = {
            product: pid,
            quantity: 1
          }
          cart.products.push(newProduct)
        }else{
          cart.products.forEach(product => {
            if (product.product == pid) {
              product.quantity += 1
            }
          })
        }
      }
      await Cart.findOneAndUpdate({_id: cid}, cart)
    } catch (error) {
      console.log(error);
    }
  }

  
};