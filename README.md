# Gifted Journeys

Bienvenido a Gifted Journeys, una plataforma para explorar y adquirir experiencias únicas en diversas categorías, desde comida hasta viajes y más.

## Descripción del Proyecto

Gifted Journeys es un proyecto web que ofrece una variedad de servicios y experiencias en diferentes categorías. Los usuarios pueden explorar, seleccionar y comprar productos o servicios de sus categorías favoritas.

## Características

- **Exploración por Categorías:** Descubre experiencias organizadas por categorías como Comida, Viaje y Experiencia.
- **Detalles del Producto:** Obtén información detallada sobre cada producto o servicio, incluyendo descripción, precio y disponibilidad.
- **Carrito de Compras:** Agrega productos al carrito, ajusta las cantidades y realiza la compra de múltiples productos.
- **Proceso de Compra:** Completa la compra proporcionando tus detalles y recibiendo confirmación de la orden.

## Estructura del Proyecto
- `/src`: Contiene el código fuente de la aplicación.
  - `/components`: Componentes reutilizables.
  - `/context`: Contexto de la aplicación.
  - `/data`: Datos de ejemplo y funciones asincrónicas.
  - `/config`: Configuración, como la conexión a Firebase.
- `/public`: Archivos estáticos y HTML base.

## Tecnologías Utilizadas

- React.js
- Chakra UI
- Firebase (Firestore para la base de datos)
- Vite (Bundler)
- React Router

## Instalación y Uso

1. Clonar el repositorio:

   git clone https://github.com/FlorEspinoza18/gifted-journeys.git

Instala las dependencias:

cd gifted-journeys
npm install

2. Configura Firebase:

Crea un proyecto en Firebase.
Configura las credenciales en src/config/Firebase.js.

3. Inicia la aplicación:

npm run dev