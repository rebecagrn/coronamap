import React from "react";
import Axios from "axios";
import "./App.css";
export default class App  extends React.Component {
  state = {
    confirmed: 0,
    recovered: 0,
    deaths: 0,
    countries: []
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const resApi = await Axios.get("https://covid19.mathdro.id/api");
    const resCountries = await Axios.get("https://covid19.mathdro.id/api/countries");
    this.setState({
      confirmed: resApi.data.confirmed.value,
      recovered: resApi.data.recovered.value,
      deaths: resApi.data.deaths.value,
    })
  }

  renderCountryOptions() {

  }

  render() {
    return (
    <div className="container">
      <h1>Corona Map</h1>

      <select>
        {this.renderCountryOptions()}
      </select>

      <div className="flexboxes">
        <div className="boxes confirmed">
          <h3>Casos Confirmados</h3>
          <h4>{this.state.confirmed}</h4>
        </div>
        <div className="boxes recovered">
        <h3>Recuperados</h3>
          <h4>{this.state.recovered}</h4>
        </div>
        <div className="boxes deaths">
        <h3>Mortes</h3>
          <h4>{this.state.deaths}</h4>
        </div>
      </div>
    </div>
    );
  }
}