import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Cursos from "./pages/Cursos";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 bg-light">
        {/* Encabezado */}
        <header className="bg-primary text-white text-center py-4 shadow-sm">
          <h1 className="fw-bold display-5">Academia de Baile <span className="text-warning">"BARCELONA"</span></h1>
          <p className="fst-italic m-0">Joel Choque Yujra</p>
        </header>

        {/* Navegación */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
          <div className="container">
            <Link className="navbar-brand fw-bold" to="/">Academia</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" end>Inicio</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/cursos">Oferta de Cursos</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Contenido */}
        <main className="container flex-grow-1 py-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<Cursos />} />
          </Routes>
        </main>

        {/* Pie de página */}
        <footer className="bg-primary text-white text-center py-3 mt-auto shadow-sm">
          <small>© 2025 Joel Choque Yujra | Todos los derechos reservados</small>
        </footer>
      </div>
    </Router>
  );
}

export default App;
