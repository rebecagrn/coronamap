import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if(!confirmed) {
    return 'Carregando...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.confirmed)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Casos Confirmados</Typography>
            <Typography variant="h5">{confirmed.value}
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator="."
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Número de casos ativos do Covid-19</Typography>
          </CardContent>
          </Grid>
          <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recuperados</Typography>
            <Typography variant="h5">{recovered.value}
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator="."
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Número de pessoas recuperadas do Covid-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Mortes</Typography>
            <Typography variant="h5">{deaths.value}
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator="."
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">.Número de mortes por Covid-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;