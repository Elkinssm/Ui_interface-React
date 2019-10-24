import React, { Component } from "react";
import Layout from "../Layout";
import "./style.scss";
export default class Credits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valorPrestamo: 100000,
      month: 0,
      textMonth: "Enero"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeMonth = this.handleChangeMonth.bind(this);
  }

  handleChange(event) {
    this.setState({ valorPrestamo: event.target.value });
  }

  handleChangeMonth(event) {
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ];
    const textOfMonth = months[event.target.value];
    this.setState({ textMonth: textOfMonth });
    this.setState({ month: event.target.month });
  }

  render() {
    return (
      <Layout>
        <div className="slide">
          <form>
            <label>
              <h1>Valor Deseado</h1>
            </label>
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

            <input
              type="range"
              className="custom-range"
              min="0"
              max="11"
              step="1"
              id="customRangeMonths"
              value={this.state.month}
              onChange={this.handleChangeMonth}
            />
            <label id="textMonth">{this.state.textMonth}</label>
          </form>
        </div>
      </Layout>
    );
  }
}
