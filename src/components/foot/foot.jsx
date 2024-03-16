import "./foot.css"

function Footer() {
    return (
      <div className="footer">
        <div className="footer-section">
          <h3>SOBRE NOSOTROS</h3>
          <ul>
            <li>Quiénes somos</li>
            <li>Qué hacemos</li>
            <li>Blog</li>
            <li>Sucursales</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>SERVICIO AL CLIENTE</h3>
          <ul>
            <li>Preguntas frecuentes</li>
            <li>Despacho</li>
            <li>Políticas de privacidad</li>
            <li>Términos y condiciones</li>
            <li>Contacto</li>
            <li>Denuncias</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>PRODUCTOS</h3>
          <ul>
            <li>Anillos</li>
            <li>Cadenas</li>
            <li>Aros</li>
            <li>Pulseras</li>
            <li>Colgantes</li>
            <li>Piercing</li>
            <li>Relojes</li>
            <li>Oro Laminado</li>
            <li>Joyas de plata</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>CLIENTE</h3>
          <ul>
            <li>Iniciar Sesión</li>
            <li>Registrarme</li>
            <li>Recuperar Contraseña</li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Footer;