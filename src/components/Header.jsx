import './Header.css';
import logo from "../assets/logo-RoadSafe.png"
function Header () {
  return (
    <header className="navegacion">
        <div className="logo">
            <span className="icono-logo">⚡</span>
            <h1>RoadSafe</h1>
        </div>

        <nav className="menu-principal">
            <a href="#" >Inicio</a>
            <a href={logo}>Logo</a>
            <a href="#nosotros">Nosotros</a>
        </nav>

        <button className="boton-comunidad">Únete a la comunidad</button>
    </header>
  );
};

export default Header;