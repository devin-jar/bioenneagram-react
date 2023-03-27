import "./MainSection.css";

import backgroundMain from "../../../assets/images/background-main.jpg";

export const MainSection = () => {
  return (
    <section id="main">
      <h1>Listo para descubrir los secretos de tu personalidad</h1>
      <div className="background-effect-container">
        <figure>
          <img
            src={backgroundMain}
            alt="Fondo Principal"
            className="background-image img-fluid"
          />
        </figure>
      </div>
    </section>
  );
};
