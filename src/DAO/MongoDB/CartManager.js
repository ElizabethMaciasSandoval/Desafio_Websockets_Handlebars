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
      const cart = await Cart.findOne({_id:cid});
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
          pid: Number(pid),
          quantity: 1
        }
        cart.products.push(product)
      } else {
        const pidExists = cart.products.find(product => product.pid === Number(pid));
        if (pidExists === undefined || pidExists === null) {
          const newProduct = {
            pid: Number(pid),
            quantity: 1
          }
          cart.products.push(newProduct)
        }
        cart.products.forEach(product => {
          if (product.pid === Number(pid)) {
            product.quantity += 1
          }
        })
      }
      await Cart.findOneAndUpdate({_id: cid}, cart)
    } catch (error) {
      console.log(error);
    }
  }

  
};