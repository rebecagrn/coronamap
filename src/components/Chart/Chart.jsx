import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    }

    fetchAPI();
  });

  const lineChart = (
    dailyData.length // !== 0
    ? (
    <Line 
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [{
          data: dailyData.map(({ confirmed }) => confirmed),
          label: 'Casos Confirmados',
          borderColor: 'rgb(224, 121, 51)',
          fill: true,
        }, {
          data: dailyData.map(({ deaths }) => deaths),
          label: 'Mortes',
          borderColor: 'red',
          backgroundColor: 'rgb(211, 96, 96)',
          fill: true,
        }],
      }}
    />) : null

  );

  return (
    <div className={styles.container}>
      {lineChart}
    </div>
  )
}

export default Chart;