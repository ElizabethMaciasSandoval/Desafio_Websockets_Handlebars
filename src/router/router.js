import { productsController } from "../controller/controller.products.js";
import { cartsController } from "../controller/controller.carts.js";
import { router } from "../controller/controller.js";

export const routes = (app) => {
  app.use('/api/products', productsController)
  app.use('/api/carts', cartsController)
  app.use('/', router)
}