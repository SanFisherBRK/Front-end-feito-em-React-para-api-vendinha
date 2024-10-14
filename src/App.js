import logo from "./logo.svg";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import CadastroUser from "./components/CadastroUser";
import { Jumbotron, Button } from "react-bootstrap";

function App() {
  return (
    <div>
      <h1>Bem vidos a Api Vendinha</h1>

      <h3 id="title">
        Sobre o projeto Api Vendinha
        <br /> é uma aplicação full stack Web construída durante o 4ª semestre
        do Curso analise
        <br /> e desenvolvimento de sistemas organizado pela Faculdade Impacta.
        <br />
        Diretório do projeto em:
        <br />
        <a
          href="https://github.com/SanFisherBRK/api-vendinha"
          className="btn btn-primary"
        >
          Repositório do projeto
        </a>
      </h3>
    </div>
  );
}

export default App;
