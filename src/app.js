import { Server } from "socket.io";
import { ProductManager } from "./clases/ProductManager.js";
import { app } from "./index.js";

const manager = new ProductManager('src/files/products.json')

const port = 8080;

const httpServer = app.listen(port, () => {
  console.log(`Server running ata port ${port}`);
});

const io = new Server (httpServer)

io.on('connection', async socket =>{
  console.log(`New client with id: ${socket.id}`);

  // envio todos los productos 
  const products = await manager.getProducts()
  socket.emit('menssageServerProducts:', products)

  // agrego un nuevo producto
  socket.on('messageClientNewProduct:', async data =>{
    const newProduct = data;
    await manager.addProduct(newProduct)
  })

  //elimino un producto
  socket.on('messageClientDeleteProduct:', async data =>{
    const idProduct = data;
    await manager.deleteProduct(idProduct)
  })

})