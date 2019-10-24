import React, { Component } from "react";
import Layout from "../Layout";
import { Form, Button } from "react-bootstrap";
import "./style.scss";

export default class Home extends Component {
  click = e => {
    e.preventDefault();
    //Get data
    const user = e.target.elements[0].value;
    const password = e.target.elements[1].value;

    console.log("user", user, "pass", password);
    //TODO:Get Request to API

    this.props.history.push("./users");
  };

  render() {
    return (
      <Layout>
        <div className="home">
          <h2>Login</h2>
          <Form className="col-12" onSubmit={e => this.click(e)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-disable">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                autoComplete="on"
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="success" type="submit">
              Submit
            </Button>
            &nbsp;
            <Button
              variant="success"
              type="button"
              onClick={() => this.props.history.push("./sign-up")}
            >
              Sign up
            </Button>
          </Form>
        </div>
      </Layout>
    );
  }
}
