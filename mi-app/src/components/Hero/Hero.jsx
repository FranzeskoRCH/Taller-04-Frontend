import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="hero">
            <h1>
                Aprende <span className="ReactWord">React</span> desde cero
            </h1>

            <p>
                Domina la librería más popular del frontend con proyectos prácticos y reales
            </p>

            <Link className="hero-cta" to="/cursos">Ver Cursos</Link>
        </section>
    );
}

export default Hero;
