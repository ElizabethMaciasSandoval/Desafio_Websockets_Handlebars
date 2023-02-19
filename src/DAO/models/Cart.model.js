import mongoose from "mongoose";

const cartCollection = 'product';

const cartSchema = new mongoose.Schema({
  products: {
    type: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'product'
        }
      }
    ],
    default: []
  }
});

  export const Cart = mongoose.model(cartCollection, cartSchema);