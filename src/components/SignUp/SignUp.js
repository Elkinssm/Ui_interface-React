import React, { Component } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import "./style.scss";
import Layout from "../Layout";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      errorMessage: ""
    };
  }
  click = e => {
    e.preventDefault();
    let data = {};

    //Validate password
    if (e.target.elements[4].value === e.target.elements[5].value) {
      data.nombre = e.target.elements[0].value;
      data.apellido = e.target.elements[1].value;
      data.cedula = e.target.elements[2].value;
      data.email = e.target.elements[3].value;
      data.clave = e.target.elements[4].value;
    } else {
      console.log("Paswword not match");
      this.setState({
        error: true,
        errorMessage: "Paswword not match"
      });
    }
    console.log("Form Sign up: ", data);
  };

  render() {
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
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="input"
                    required
                    placeholder="Enter your name"
                  />
                </Form.Group>

                <Form.Group className="form" sm={12} md={12}>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="input"
                    required
                    placeholder="Enter your lastname"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group className="form" sm={12} md={6}>
                  <Form.Label>Cedula</Form.Label>
                  <Form.Control
                    type="number"
                    requiredplaceholder="Enter your Id"
                  />
                </Form.Group>

                <Form.Group className="form" sm={12} md={6}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    required
                    placeholder="Enter your email"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group className="form" sm={12} md={6}>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    placeholder="Enter your password"
                    required
                    type="password"
                  />
                </Form.Group>

                <Form.Group className="form" sm={12} md={6}>
                  <Form.Label>Confirm Contraseña</Form.Label>
                  <Form.Control
                    placeholder="Confirm your password"
                    required
                    type="password"
                  />
                </Form.Group>
              </Form.Row>

              <Button variant="success" type="submit">
                Send
              </Button>
            </Form>
          </div>
        </Container>
      </Layout>
    );
  }
}
