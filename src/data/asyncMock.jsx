import logo from '../assets/GiftedJourneysLogo3.png';
import almuerzo from '../assets/almuerzo.avif';
import merienda from '../assets/merienda.webp';
import spa from '../assets/spa.webp';
import cataratas from '../assets/cataratas.jpg';

export const products =[
    {
        id: 1,
        nombre: "Exp. Almuerzo",
        precio: 8500,
        stock: 10,
        categoria: "Comida",
        descripcion: "Almuerzo para 2 personas",
        imagen: almuerzo
    },
    {
        id: 2,
        nombre: "Exp. Merienda",
        precio: 1200,
        stock: 5,
        categoria: "Comida",
        descripcion: "Merienda para 2 personas. Incluye: ... ",
        imagen: merienda
    },
    {
        id: 3,
        nombre: "Exp. Viaje nacional",
        precio: 1500,
        stock: 7,
        categoria: "Viaje",
        descripcion: "Viaje a cataratas por el fin de semana.",
        imagen: cataratas
    },
    {
        id: 4,
        nombre: "Exp. Día Spa",
        precio: 2300,
        stock: 4,
        categoria: "Experiencia",
        descripcion: "Día de spa. Incluye: .. ",
        imagen: spa
    },
];
export default products;

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
} 

export const getProductById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            const filterProduct = products.find((prod) => prod.id === parseInt(id))
            resolve(filterProduct)
        }, 2000)
    })
} 

export const getProductsByCategory = (category) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            const filterProduct = products.filter((prod) => prod.categoria === category)
            resolve(filterProduct)
        }, 2000)
    })
} 

