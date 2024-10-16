// ARRAYS 
const productos = [
    { 
        name: "Oscillococcinum", 
        price: 11.59, 
        originalPrice: 14.50, 
        image: "img1.jpg", 
        category: "medicamentos", 
        brand: "Boiron" 
    },
    { 
        name: "Marimer Hipertonico", 
        price: 11.60, 
        originalPrice: 12.24, 
        image: "img2.jpg", 
        category: "medicamentos", 
        brand: "Marimer" 
    },
    { 
        name: "Abrilar Jarabe", 
        price: 7.71, 
        originalPrice: 9.64, 
        image: "img3.jpg", 
        category: "medicamentos", 
        brand: "Abrilar" 
    },
  ];
  
  // Recorrer los productos y mostrar su información
  productos.forEach(producto => {
    console.log(`${producto.name} cuesta $${producto.price}`);
  });

  
  // Eliminar productos del carrito
  carrito.pop(); // Elimina el último producto
  carrito.shift(); // Elimina el primer producto
  
  console.log("Carrito después de eliminar productos:", carrito);
  
// Usando find para buscar el primer producto por nombre
const productoBuscado = productos.find(producto => producto.name === "Oscillococcinum");
console.log(productoBuscado);

// Usando filter para obtener solo los productos en oferta
const productosEnOferta = productos.filter(producto => producto.price < producto.originalPrice);
console.log("Productos en oferta:", productosEnOferta);

const servicesCharge = [{name: "Delivery", cost: 2}, {name: "Retiro en tienda", cost: 0}];
const servicesMachines = [{name: "Reparación", cost: 5}, {name: "Mantenimiento", cost: 10}];

// Usando spread para combinar arreglos
const allServices = [...servicesCharge, ...servicesMachines];
console.log(allServices);

// Rest: agrupar elementos restantes
const [primero, segundo, ...restantes] = productos;
console.log("Primer producto:", primero);
console.log("Productos restantes:", restantes);
