import Producto from '../productos/producto'; 
import './productlist.css'; 

function ProductList() {
  const productos = [
      { id: 1, nombre: "Esmeralda", imageUrl: "../imagenes/esmeralda.webp", price: "$100" },
      { id: 2, nombre: "Ambar", imageUrl: "../imagenes/ámbar.webp", price: "$200" },
      { id: 3, nombre: "Diamante", imageUrl: "../imagenes/diamante.webp", price: "$300" },
      { id: 4, nombre: "Amatista", imageUrl: "../imagenes/amatista.webp", price: "$150" },
      { id: 5, nombre: "Fluorita", imageUrl: "../imagenes/fluorita.webp", price: "$120" },
      { id: 6, nombre: "Rubi", imageUrl: "../imagenes/rubi.webp", price: "$250" },
      { id: 7, nombre: "Onyx", imageUrl: "../imagenes/onyx.webp", price: "$80" },
      { id: 8, nombre: "Zafiro", imageUrl: "../imagenes/zafiro.webp", price: "$220" },
      { id: 9, nombre: "Aguamarina", imageUrl: "../imagenes/aguamarina.webp", price: "$190" },
      { id: 10, nombre: "Granate", imageUrl: "../imagenes/granate.webp", price: "$200" },
  ];

  return (
      <div className="product-list">
          {productos.map((producto) => (
              <Producto key={producto.id} data={producto} />
          ))}
      </div>
  );
}

export default ProductList;
