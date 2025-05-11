import type { Route } from "./+types/home";
import "./bella.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "BellaStyle" },
    { name: "description", content: "Descubre una nueva forma de cuidar tu piel, cabello y cuerpo." },
  ];
}

export default function Home() {
  return (
    <>
      <header>
        <div className="logo-box">
          <img src="CARA.png" alt="Logo" className="logo-img" />
          <h1 className="logo">BellaStyle</h1>
          <nav>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#productos">Productos</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="container">
          <h2><u>Brilla con Estilo</u></h2>
          <p>Descubre una nueva forma de cuidar tu piel, cabello y cuerpo</p>
          <a href="#productos" className="btn">Explorar</a>
        </div>
      </section>

      <section className="servicios" id="servicios">
        <div className="container">
          <h2>¿Qué ofrecemos?</h2>
          <div className="grid">
            <div className="card">
              <i className="fas fa-spa"></i>
              <h3>Tratamientos faciales</h3>
              <p>Productos especializados para tu tipo de piel.</p>
            </div>
            <div className="card">
              <i className="fas fa-pump-soap"></i>
              <h3>Higiene personal</h3>
              <p>Cuidado diario con ingredientes naturales.</p>
            </div>
            <div className="card">
              <i className="fas fa-air-freshener"></i>
              <h3>Aromaterapia</h3>
              <p>Bienestar emocional con esencias únicas.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="productos" id="productos">
        <div className="container">
          <h2><u>Productos Destacados</u></h2>
          <br />
          <div className="grid">
            <div className="producto">
              <img src="PRODUCTO.png" alt="Producto 1" />
              <h3>Productos faciales</h3>
              <p>Cualquier producto tiene un precio entre 3.00€-50.00€</p>
              <p>Mascarilla facial hidratante "Granier" 3.00€</p>
            </div>
            <div className="producto">
              <img src="PELO.png" alt="Producto 2" />
              <h3>Productos de cabello</h3>
              <p>En general los productos van entre 5.00€-90.00€</p>
              <p>Aceite de aloe vera "L'Oréal" 15.00€</p>
            </div>
            <div className="producto">
              <img src="CARA.png" alt="Producto 3" />
              <h3>Producto corporal</h3>
              <p>Estos productos cuestan entre 5.00€-30.00€</p>
              <p>Aceite anticelulitis "Granier" 20.00€</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contacto">
        <div className="container">
          <p>Contacto: info@bellastyle.com | Tel: 600 123 456</p>
          <p>&copy; 2025 BellaStyle. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}
