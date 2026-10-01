import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
    const SiteName = "ReactAcademy"
    return (
        <nav>
            <div>
                <NavLink className="brand" to="/">{SiteName}</NavLink>
            </div>

            <div>
                <ul>
                    <li>
                        <NavLink to="/" end>
                        Inicio 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cursos">
                        Cursos 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/nosotros">
                        Nosotros
                        </NavLink>
                    </li>
                    <li><NavLink to="/login">Iniciar sesión</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
