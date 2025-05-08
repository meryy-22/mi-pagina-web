import type { Route } from "./+types/home";
import "./home.css"
export function meta({}: Route.MetaArgs) {
  return [
    { title: "mery" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
    <header>
      <div className="logo">
        <img src="logotipo.PNG" alt="Logotipo de Gym-Mari" />
        <h1>Gym-Mari</h1>
        <p>Transforma tu cuerpo, mente y vida</p>
      </div>
      <nav id="navbar">
        <ul>
          <li><a href="#taekwondo">Taekwondo</a></li>
          <li><a href="#defensa">Defensa Personal</a></li>
          <li><a href="#boxeo">Boxeo</a></li>
          <li><a href="#crossfit">CrossFit</a></li>
          <li><a href="#yoga">Yoga</a></li>
          <li><a href="#atletismo">Atletismo</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="introduccion">
        <h2>Bienvenidos a Gym-Mari</h2>
        <p>
          Ubicado en EXTREMADURA-CACERES (CALLE/ El país de las maravillas), Gym-Mari ofrece una variedad de disciplinas deportivas diseñadas para mejorar tu salud física y mental. Ya sea que busques aumentar tu fuerza, flexibilidad, autodefensa o bienestar general, tenemos el programa perfecto para ti.
        </p>
      </section>

      <section id="taekwondo">
        <h2>Taekwondo</h2>
        <div className="deporte">
          <img src="boxeo.png" alt="Taekwondo" />
          <div className="info">
            <p><strong>Edad recomendada:</strong> A partir de 6 años.</p>
            <p><strong>Beneficios:</strong> Mejora la flexibilidad, la fuerza y la disciplina mental.</p>
            <p><strong>Horario:</strong> Lunes y Miércoles, 18:00 - 19:30</p>
          </div>
        </div>
      </section>

      <section id="defensa">
        <h2>Defensa Personal</h2>
        <div className="deporte">
          <img src="defensa.png" alt="Defensa Personal" />
          <div className="info">
            <p><strong>Edad recomendada:</strong> A partir de 12 años.</p>
            <p><strong>Beneficios:</strong> Aprende técnicas efectivas para protegerte en situaciones de riesgo.</p>
            <p><strong>Horario:</strong> Martes y Jueves, 17:00 - 18:30</p>
          </div>
        </div>
      </section>

      <section id="boxeo">
        <h2>Boxeo</h2>
        <div className="deporte">
          <img src="boxeo.png" alt="Boxeo" />
          <div className="info">
            <p><strong>Edad recomendada:</strong> A partir de 14 años.</p>
            <p><strong>Beneficios:</strong> Mejora la resistencia cardiovascular, la coordinación y la fuerza.</p>
            <p><strong>Horario:</strong> Lunes, Miércoles y Viernes, 19:00 - 20:30</p>
          </div>
        </div>
      </section>

      <section id="crossfit">
        <h2>CrossFit</h2>
        <div className="deporte">
          <img src="logotipo.PNG" alt="CrossFit" />
        
          <div className="info">
            <p><strong>Edad recomendada:</strong> A partir de 16 años.</p>
            <p><strong>Beneficios:</strong> Combina levantamiento de pesas, gimnasia y entrenamiento cardiovascular para ofrecer un entrenamiento completo y desafiante.</p>
            <p><strong>Horario:</strong> Lunes, Miércoles y Viernes, 07:00 - 08:30</p>
          </div>
        </div>
      </section>

      <section id="yoga">
        <h2>Yoga</h2>
        <div className="deporte">
          <img src="yoga.jpg" alt="Yoga" />
          <div className="info">
            <p><strong>Edad recomendada:</strong> A partir de 10 años.</p>
            <p><strong>Beneficios:</strong> Mejora la flexibilidad, reduce el estrés y promueve el bienestar general.</p>
            <p><strong>Horario:</strong> Martes y Jueves, 09:00 - 10:30</p>
          </div>
        </div>
      </section>

      <section id="atletismo">
        <h2>Atletismo</h2>
        <div className="deporte">
          <img src="atletismo.png" alt="Atletismo" />
          <div className="info">
            <p><strong>Edad recomendada:</strong> A partir de 8 años.</p>
            <p><strong>Beneficios:</strong> Desarrolla velocidad, resistencia y coordinación.</p>
            <p><strong>Horario:</strong> Lunes y Miércoles, 17:00 - 18:30</p>
          </div>
        </div>
      </section>

      <section id="contacto">
        <h2><b>Contacto</b></h2>
        <p><strong>Dirección:</strong> Calle-El país de las maravillas nº12</p>
        <p><strong>Teléfono:</strong> 654-98-65-23</p>
        <p><strong>Email:</strong> gym.mari@gmail.com</p>
        <p><strong>Redes Sociales:</strong></p>
        <ul>
          <li><a href="https://es-es.facebook.com/">Facebook</a></li>
          <li><a href="https://www.instagram.com/">Instagram</a></li>
          <li><a href="https://x.com/">Twitter</a></li>
        </ul>
      </section>
    </main>

    <footer>
      <p>&copy; 2025 Gym-Mari. Todos los derechos reservados.</p>
    </footer>
  </>
    
  );
}

