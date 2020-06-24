import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

export default class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const resData = await fetchData();

    this.setState({ data: resData });
  }

  handleCountryChange = async (country) => {
    const resData = await fetchData(country);
    
    this.setState({ data: resData, country: country });
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <h1>Corona Map</h1>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart />
      </div>
    );
  }
}
