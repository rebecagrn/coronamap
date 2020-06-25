import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    }

    fetchAPI();
  }, []);

  const lineChart = (
    dailyData.length // !== 0
    ? (
    <Line 
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [{
          data: dailyData.map(({ confirmed }) => confirmed),
          label: 'Casos Confirmados',
          borderColor: 'rgb(168, 85, 30)',
          backgroundColor: 'rgb(224, 121, 51)',
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

  const barChart = (
    confirmed
      ? (
        <Bar
          data={{
            labels: ['Casos Confirmados', 'Recuperados', 'Mortes'],
            datasets: [{
              label: 'Pessoas',
              backgroundColor: ['rgba(224, 120, 51, 0.5);',
                'rgba(88, 226, 157, 0.5)',
                'rgba(245, 72, 72, 0.5)',
              ],
              data: [confirmed.value, recovered.value, deaths.value]
            }]
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: `Dados atualizados em ${(country)}` },
          }}
        />
      ) : null
  );

  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  )
}

export default Chart;