import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { FaMusic, FaMapMarkerAlt } from "react-icons/fa";

const danzas = [
  { nombre: "Caporales", region: "La Paz" },
  { nombre: "Morenada", region: "Oruro" },
  { nombre: "Tinku", region: "Potosí" },
  { nombre: "Cueca", region: "Chuquisaca" },
  { nombre: "Taquirari", region: "Santa Cruz" },
];

function Home() {
  return (
    <div className="bg-white p-5 rounded shadow-sm">
      <h2 className="text-center mb-4 text-primary fw-bold">Danzas de la Academia "BARCELONA"</h2>
      <p className="text-center text-muted mb-5">
        Estas son algunas de las danzas más representativas que se imparten en nuestra academia.
      </p>

      <Accordion defaultActiveKey="0" flush>
        {danzas.map((danza, idx) => (
          <Accordion.Item eventKey={idx.toString()} key={idx}>
            <Accordion.Header>
              <FaMusic className="me-2 text-success" />
              {danza.nombre}
            </Accordion.Header>
            <Accordion.Body className="fs-6">
              Esta danza proviene de la región de{" "}
              <strong className="text-warning">
                <FaMapMarkerAlt className="me-1" />
                {danza.region}
              </strong>, y es una expresión artística única dentro del folclore boliviano.
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default Home;
