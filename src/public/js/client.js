const socket = io();

//tabla para renderizar todos los productos
const tableProducts = document.getElementById('tableProducts');
const noProducts = document.getElementById('noProducts');

socket.on('menssageServerProducts:', data => {
  tableProducts.innerHTML = ''
  if (data) {
    data.forEach(element => {
      tableProducts.innerHTML += ` 
      <tr>
      <th scope="row">${element.id}</th>
      <td>${element.title}</td>
      <td>${element.description}</td>
      <td>${element.price}</td>
      <td>${element.stock}</td>
      <td>${element.category}</td>
      </tr>
      `
    });
  } else {
    noProducts.innerHTML += '<p>No hay productos</p>'
  }
})

//formulario para crear un producto
const formCreateProduct = document.getElementById('formCreateProduct');

formCreateProduct.addEventListener('submit', event =>{
  event.preventDefault() 
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const price = document.getElementById('price').value;
  const status = document.getElementById('status').value;
  const stock = document.getElementById('stock').value;
  const category = document.getElementById('category').value;
  const thumbnails = document.getElementById('thumbnails').value;
  const urlsImages = thumbnails.split(' ');

  const product = {
    title,
    description,
    price: Number(price),
    status: Boolean(status),
    stock: Number(stock),
    category,
    thumbnails: urlsImages
  }

  socket.emit('messageClientNewProduct:', product)
})

//formulario para eliminar un producto
const formDeleteProduct = document.getElementById('formDeleteProduct');

formDeleteProduct.addEventListener('submit', event =>{
  event.preventDefault()
  const idProduct = document.getElementById('idProduct').value;
  const idProductParse = Number(idProduct);

  socket.emit('messageClientDeleteProduct:', idProductParse)
})








