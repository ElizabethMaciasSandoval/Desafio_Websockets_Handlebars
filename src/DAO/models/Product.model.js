import mongoose from "mongoose";

const productCollection = 'product';

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  status: Boolean,
  stock: Number,
  category: String,
  thumbnails: {
    type: [String]
  },
  code: String
});

export const Product = mongoose.model(productCollection, productSchema)