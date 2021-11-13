import React from "react";

import "./style.css";

export function Contatos() {
  const linkedin = "https://www.linkedin.com/in/douglas-carvalho-71a906177/";
  const instagram = "https://www.instagram.com/douglasr25/";
  const whatsapp = 5535998176792;
  const email = "douglasr.rstr42@gmail.com";
  const github = "https://github.com/douglasrc";
  return (
    <span className="contatos-icons">
      <a href={linkedin} target="_blank" rel="noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href={instagram} target="_blank" rel="noreferrer">
        <i className="fab fa-instagram-square"></i>
      </a>
      <a href={`https://wa.me/send?phone=${whatsapp}&text=Texto%20Olá em que posso te ajudar`} target="_blank" rel="noreferrer">
        <i className="fab fa-whatsapp-square"></i>
      </a>
      <a href={`mailto:${email}?Subject=Olá em que posso te ajudar`} target="_blank" rel="noreferrer">
        <i className="fas fa-envelope"></i>
      </a>
      <a href={github} target="_blank" rel="noreferrer">
        <i className="fab fa-github"></i>
      </a>
    </span>
  );
}
