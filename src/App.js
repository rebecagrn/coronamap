import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.css";
import { fetchData } from "./api";

export default class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const resData = await fetchData();

    this.setState({ data: resData });
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <h1>Corona Map</h1>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}
