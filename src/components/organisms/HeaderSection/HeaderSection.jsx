import { useState } from "react";
import PropTypes from "prop-types";

import { logoAlex } from "../../../assets/icons";

export const HeaderSection = ({ sections }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const onNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* TODO: Hacer Componente del logo*/}
          <div className="logo">
            <a className="navbar-brand" href="#">
              <img src={logoAlex} alt="logo-marca" />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={onNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarNav"
          >
            <ul className="main-nav navbar-nav ms-auto">
              {sections.map((section) => (
                <li
                  className="main-nav__item nav-item item-navbar "
                  key={section.section}
                >
                  <a className="nav-link " href={`#${section.sectionId}`}>
                    {section.section}
                  </a>
                </li>
              ))}
            </ul>

            {/* TODO: Hacer Componente de la molecula btn*/}
            <div className="cta ">
              <a href="#" className="button btn btn-primary">
                Reserva Ahora
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

HeaderSection.propTypes = {
  sections: PropTypes.array.isRequired,
};
