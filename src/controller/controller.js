import { Router } from "express";
import { ProductManager } from "../clases/ProductManager.js";

export const router = Router();

const manager = new ProductManager('src/files/products.json');

router.get('/', async (req, res) => {
  const products = await manager.getProducts();
  res.render('index.handlebars', { products })
  })

router.get('/realtimeproducts', (req, res) => {
  res.render('realTimeProducts.handlebars', {})
})