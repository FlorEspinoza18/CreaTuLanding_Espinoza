import almuerzo from '../assets/almuerzo.avif';
import merienda from '../assets/merienda.webp';
import spa from '../assets/spa.webp';
import cataratas from '../assets/cataratas.jpg';
import LookStyle from '../assets/LookStyle.jpeg';

const generateProducts = () => {
  return [
    {
      id: 1,
      nombre: "Experiencia Almuerzo",
      precio: 8500,
      stock: 10,
      categoria: "Comida",
      descripcion: "Almuerzo para 2 personas",
      imagen: "https://i.pinimg.com/736x/c6/75/55/c675552755146b9e27cdf5396cf7bd6b.jpg"
    },
    {
      id: 2,
      nombre: "Experiencia Merienda",
      precio: 1200,
      stock: 5,
      categoria: "Comida",
      descripcion: "Merienda para 2 personas. Incluye: ... ",
      imagen: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR0pxsdI5pIv2dSwV7A8wblXVmrM-PpfGGJixnNLMNyKcO7tQYs"
    },
    {
      id: 3,
      nombre: "Experiencia Viaje a Cataratas",
      precio: 1500,
      stock: 7,
      categoria: "Viaje",
      descripcion: "Se ofrece viaje y estadía.",
      imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/60/69/26/caption.jpg?w=1200&h=-1&s=1"
    },
    {
      id: 4,
      nombre: "Experiencia Día Spa",
      precio: 2300,
      stock: 4,
      categoria: "Experiencia",
      descripcion: "Se ofrece sesiones de masajes y tratamientos corporales ",
      imagen: "https://img.freepik.com/foto-gratis/relajarse-salon-spa_1098-15913.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701648000&semt=ais"    
},
    {
      id: 5,
      nombre: "Experiencia Look & Style",
      precio: 2300,
      stock: 2,
      categoria: "Experiencia",
      descripcion: "Se ofrece clase de automaquillaje y asesoramiento de imagen ",
      imagen: "https://m.media-amazon.com/images/I/71MFkTlfmOL._AC_SX679_.jpg"
    },
    {
      id: 6,
      nombre: "Experiencia Viaje a Mendoza",
      precio: 1500,
      stock: 7,
      categoria: "Viaje",
      descripcion: "Se incluye viaje y estadía en la provincia de Mendoza.",
      imagen: "https://www.serargentino.com/public/images/2020/02/turistas-en-Mendoza-773x458.jpeg"
    },
  ];
};

const products = generateProducts();

export const getProducts = () => {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise ((resolve) => {
    setTimeout(() => {
      const filterProduct = products.find((prod) => prod.id === parseInt(id));
      resolve(filterProduct);
    }, 2000);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise ((resolve) => {
    setTimeout(() => {
      const filterProduct = products.filter((prod) => prod.categoria === category);
      resolve(filterProduct);
    }, 2000);
  });
};

export default products;
