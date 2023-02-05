import { productsController } from "../products/controller.products.js";
import { cartsController } from "../carts/controller.carts.js";
import { router } from "../controller/controller.js";

export const routes = (app) => {
  app.use('/api/products', productsController)
  app.use('/api/carts', cartsController)
  app.use('/api', router)
}