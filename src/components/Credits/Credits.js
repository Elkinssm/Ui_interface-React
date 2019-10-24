import React, { Component } from "react";
import Layout from "../Layout";
import "./style.scss";
export default class Credits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valorPrestamo: 100000,
      plazo: 1
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangePlazo = this.handleChangePlazo.bind(this);
  }

  handleChange(event) {
    this.setState({ valorPrestamo: event.target.value });
  }

  handleChangePlazo(event) {
    
   
    this.setState({ plazo: event.target.value});
  }

  render() {
    return (
      <Layout>
        <div className="slide">
          <h2>Info Credit</h2>
          <form>
            <label>Valor Deseado</label>
            <input
              type="range"
              className="custom-range"
              min="100000"
              max="1000000"
              step="100000"
              id="customRange"
              value={this.state.valorPrestamo}
              onChange={this.handleChange}
            />
            <label id="valorPrestamo">{this.state.valorPrestamo}</label>
            <br />

            <label>Plazo</label>
            <input
              type="range"
              className="custom-range"
              min="1"
              max="72"
              step="1"
              id="customRangePlazo"
              value={this.state.plazo}
              onChange={this.handleChangePlazo}
            />
            <label id="textMonth">{this.state.plazo}</label>
          </form>
        </div>
      </Layout>
    );
  }
}
