import React, { useState } from 'react';
import './producto.css';


const detallesGemas = {
  esmeralda: "La esmeralda es conocida por su intenso color verde. Se valora por su belleza y por ser una de las piedras preciosas más raras.",
  ambar: "El ámbar es una resina fósil coloreada que varía desde el amarillo pálido hasta el marrón oscuro. A menudo contiene inclusiones de insectos y plantas.",
  diamante: "El diamante, una de las sustancias naturales más duras conocidas, es apreciado por su claridad, corte, carat y color.",
  amatista: "La amatista es una variedad de cuarzo de color violeta y se considera una piedra de la paz, la purificación y la protección.",
  fluorita: "La fluorita destaca por su gama de colores vibrantes y su fluorescencia bajo la luz ultravioleta.",
  rubi: "El rubí es apreciado por su color rojo intenso y su dureza, solo superada por el diamante.",
  onyx: "El ónyx es una variedad de ágata con bandas de colores. A menudo se encuentra en negro y se utiliza en joyería fina.",
  zafiro: "El zafiro es famoso por su color azul, aunque puede encontrarse en una variedad de colores. Simboliza la nobleza, la verdad y la sinceridad.",
  aguamarina: "La aguamarina, que lleva el nombre del mar por su color azul verdoso, se dice que calma las olas y mantiene a salvo a los marineros.",
  granate: "El granate es conocido por su amplia gama de colores y por ser un símbolo de amistad y fidelidad."
};

function Producto({ data }) {
  const [cantidad, setCantidad] = useState(0);
  const [verDetalle, setVerDetalle] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const aumentarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const disminuirCantidad = () => {
    setCantidad(cantidad > 0 ? cantidad - 1 : 0);
  };

  const toggleDetalle = () => {
    setVerDetalle(!verDetalle);
  };

  return (
    <div className="producto">
      <h3>{data.nombre}</h3>
      <div 
        className="image-container" 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={data.imageUrl} alt={data.nombre} onClick={toggleDetalle} />
        {isHovered && <div className="overlay">Más detalles</div>}
      </div>
      {verDetalle && (
        <div className="detalle">
          {detallesGemas[data.nombre.toLowerCase().replace(/\s+/g, '')] || "Detalle no disponible."}
        </div>
      )}
      <div className="precio">{data.price}</div>
      <div className="controles">
        <button onClick={disminuirCantidad}>-</button>
        <span>{cantidad}</span>
        <button onClick={aumentarCantidad}>+</button>
      </div>
      <button className="agregar">Agregar al carro</button>
    </div>
  );
}

export default Producto;