import React, { Component } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import "./style.scss";
import Layout from "../Layout";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      errorMessage: "",
      tipoDocumentos: [],
      ciudades: []
    };
  }

  componentDidMount() {
    axios.get(`https://localhost:5001/api/v2/Ciudad/GetAll`).then(res => {
      const ciudades = res.data;
      console.log(ciudades);

      this.setState({ ciudades });
    });
    axios
      .get(`https://localhost:5001/api/v2/TipoDocumento/GetAll`)
      .then(res => {
        const documentos = res.data;
        console.log(documentos);

        this.setState({ tipoDocumentos: documentos });
      });
  }

  render() {
    const { ciudades, tipoDocumentos } = this.state;
    return (
      <Layout>
        <Container className="login">
          {this.state.error && (
            <Alert
              variant="danger"
              onClose={() => this.setState({ error: false })}
              dismissible
            >
              Error : {this.state.errorMessage}
            </Alert>
          )}
          <div>
            <h1>Registro De Usuarios</h1>
            <Form onSubmit={e => this.click(e)}>
              <Form.Row>
                <Form.Group className="form" sm={12} md={12}>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Ingrese su nombre"
                  />
                </Form.Group>

                <Form.Group className="form" sm={12} md={12}>
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Ingrese su apellido"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group className="form" sm={12} md={6}>
                  <Form.Label>Tipo de documento</Form.Label>
                  <Form.Control as="select">
                    {tipoDocumentos.map((option, index) => {
                      return (
                        <option key={index} value={option.id}>
                          {option.nombre}
                        </option>
                      );
                    })}
                  </Form.Control>
                </Form.Group>

                <Form.Group className="form" sm={12} md={6}>
                  <Form.Label>Número de Documento</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Ingrese su número de documento"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group className="form" sm={12} md={6}>
                  <Form.Label>Fecha Nacimiento</Form.Label>
                  <Form.Control required type="date" />
                </Form.Group>

                <Form.Group className="form" sm={12} md={6}>
                  <Form.Label>Ciudad</Form.Label>

                  <Form.Control as="select">
                    {ciudades.map((option, index) => {
                      return (
                        <option key={index} value={option.id}>
                          {option.nombre}
                        </option>
                      );
                    })}
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group className="form" sm={12} md={6}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    required
                    placeholder="Ingrese su correo"
                  />
                </Form.Group>

                <Form.Group className="form" sm={12} md={6}>
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    required
                    placeholder="Ingrese su contraseña"
                  />
                </Form.Group>
              </Form.Row>

              <Button
                variant="success"
                type="submit"
                onClick={() => this.props.history.push("./users")}
              >
                Enviar
              </Button>
            </Form>
          </div>
        </Container>
      </Layout>
    );
  }
}
