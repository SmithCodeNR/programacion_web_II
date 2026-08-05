import './Hero.css';
import tarjeta from"../assets/img-tarjeta.png"
import logo from"../assets/logo-RoadSafe.png"
function Hero(){
  return (
    <section className="seccion-inicio">
      {/* Barra lateral de redes sociales */}
      

        <div className="contenedor-hero">
            <div className="bloque-texto">
            
            <h2 className="titulo-principal">
                Sigue Tus <br />
                <span className="resaltado">Sueños...</span>
            </h2>

            <p className="descripcion">
                No se trata de esperar a que pasen las tormentas:<br />
                ¡Se trata de aprender a conducir debajo de la lluvia!🏍️💨
                
            </p>

            <div className="grupo-botones">
                <button className="boton-transparente">🚀 Explorar Tema</button>
            </div>
            </div>

            <div className="bloque-imagen">
            <img src={tarjeta} alt="Moto RoadSafe" />
            </div>
        </div>

        {/* Sección ¿Quiénes somos? */}
        <div className="seccion-nosotros">
            <div className="icono-nosotros">
                <img src={logo} alt="RoadSafe" />
            </div>
            <div id='nosotros' className='contenedor-text'>
            <h3>¿Quiénes somos?</h3>
            <p>
                Somos una comunidad de motociclistas con una idea a futuro donde se nos permita mejorar la movilidad  por medio de una pagina que genere el seguimiento de tiempo real en las vias donde circulan los usuarios.
            </p>
            </div>
        </div>

    </section>
  );
};

export default Hero;