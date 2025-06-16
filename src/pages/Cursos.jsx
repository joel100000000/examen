import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { FaMoneyBillWave, FaInfoCircle } from "react-icons/fa";

const cursos = [
  {
    titulo: "Caporales",
    descripcion: "Danza energética con trajes coloridos y ritmo rápido.",
    imagen: "https://elrinconboliviano.com/wp-content/uploads/2020/11/caporales-tradicional-de-bolivia_700x500.jpg",
    precio: "100 Bs",
  },
  {
    titulo: "Morenada",
    descripcion: "Danza tradicional con máscaras y pasos lentos.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8baIn983NApRJs17WZV8kcd_PDZg0hkCu9pKL53-NTLQOGtoku8oa4HaelOF-hY7m9BE&usqp=CAU",
    precio: "220 Bs",
  },
  {
    titulo: "Tinku",
    descripcion: "Danza de combate ceremonial con raíces andinas.",
    imagen: "https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2025/2/11/tinkus_11.jpg?itok=h-Blq3ZN",
    precio: "200 Bs",
  },
];

function Cursos() {
  const [modalShow, setModalShow] = useState(false);
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);

  const handleShow = (curso) => {
    setCursoSeleccionado(curso);
    setModalShow(true);
  };

  const handleClose = () => setModalShow(false);

  return (
    <div className="py-4 px-2">
      <h2 className="text-center text-primary fw-bold mb-5">
        💃 Oferta de Cursos de Danza Tradicional
      </h2>
      <div className="row justify-content-center">
        {cursos.map((curso, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Img variant="top" src={curso.imagen} style={{ height: "250px", objectFit: "cover" }} />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center text-dark fw-bold">{curso.titulo}</Card.Title>
                <Card.Text className="text-muted text-center">{curso.descripcion}</Card.Text>
                <div className="mt-auto text-center">
                  <Button variant="outline-primary" onClick={() => handleShow(curso)}>
                    <FaInfoCircle className="me-2" />
                    Ver Precio
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* Modal de precio */}
      {cursoSeleccionado && (
        <Modal show={modalShow} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{cursoSeleccionado.titulo}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center fs-5">
            <FaMoneyBillWave className="me-2 text-success" />
            <strong>Precio:</strong> {cursoSeleccionado.precio}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default Cursos;
