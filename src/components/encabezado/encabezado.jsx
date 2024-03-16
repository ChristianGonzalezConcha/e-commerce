import "./encabezado.css";

function Header() {
    return (
      <div className="header">
        <img src="../imagenes/logo.webp" className="logo" alt="Logo" />
        <h1 className="title">GEMAS GG</h1>
        <div className="buttons">
          <button onClick={() => alert('Iniciar sesión')}>Iniciar sesión</button>
          <button onClick={() => alert('Carrito')}>Carrito</button>
        </div>
      </div>
    );
  }
  
  export default Header;