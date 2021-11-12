import React from "react";

import "./style.css";

export function Banner() {
  return (
    <section className="banner-container">
      <div className="banner"></div>

      <img className="banner-perfil" src="assets/perfil.jpeg" alt="foto do perfil do portifolio"></img>
      <h1 className="banner-name">Douglas Carvalho</h1>
      <p className="banner-bio">Desenvolvedor Front-End</p>
    </section>
  );
}
