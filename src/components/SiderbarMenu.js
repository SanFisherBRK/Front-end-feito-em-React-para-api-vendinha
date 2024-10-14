import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./CadastroUser.css";

function SidebarMenu() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="bg-dark col-auto col-md-2 min-vh-100 ">
          <a className="text-decoration-none text-white d-flex align-itemcenter ms-3 mt-2">
            <i className="fs-4 bi bi-speedometer"></i>
            <span className="ms-1 fs-4 my-1">Brand</span>
          </a>

          <hr className="text-secondary" />

          <ul class="nav nav-pills flex-column">
            <li class="nav-item text-white fs-4 my-1">
              <a href="#" class="nav-link text-white fs-5" arial-current="page">
                <i className="bi bi-speedometer2"></i>
                <span className="ms-2">Dashboard</span>
              </a>
            </li>

            <li class="nav-item text-white fs-4 my-1">
              <a
                href="http://localhost:3000/Hopme"
                class="nav-link text-white fs-5"
                arial-current="page"
              >
                <i className="bi bi-house"></i>
                <span className="ms-2">Home</span>
              </a>
            </li>

            <li class="nav-item text-white fs-4 my-1">
              <a href="#" class="nav-link text-white fs-5" arial-current="page">
                <i className="bi bi-table"></i>
                <span className="ms-2">Order</span>
              </a>
            </li>

            <li class="nav-item text-white fs-4 my-1">
              <a href="#" class="nav-link text-white fs-5" arial-current="page">
                <i className="bi bi-grid"></i>
                <span className="ms-2">Products</span>
              </a>
            </li>

            <li class="nav-item text-white fs-4 my-1">
              <a href="#" class="nav-link text-white fs-5" arial-current="page">
                <i className="bi bi-people"></i>
                <span className="ms-2">Costomers</span>
              </a>
            </li>

            <li class="nav-item text-white fs-4 my-1">
              <a
                href="http://localhost:3000/cadastro-usuario"
                class="nav-link text-white fs-5"
                arial-current="page"
              >
                <i className="bi bi-people"></i>
                <span className="ms-2">Usuários</span>
              </a>
            </li>

            <li class="nav-item text-white fs-4 my-1">
              <a
                href="https://github.com/SanFisherBRK/api-vendinha"
                class="nav-link text-white fs-5"
                arial-current="page"
              >
                <i className="bi bi-house"></i>
                <span className="ms-2">Repository API</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1>Bem vidos a Api Vendinha</h1>

        <h3 id="title">
          Sobre o projeto Api Vendinha
          <br /> é uma aplicação full stack Web construída durante o 4ª semestre
          do Curso analise
          <br /> e desenvolvimento de sistemas organizado pela Faculdade
          Impacta.
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
    </div>
  );
}
export default SidebarMenu;
