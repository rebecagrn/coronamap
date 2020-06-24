import axios from 'axios';

const resApi = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(resApi);

    const data = { confirmed, recovered, deaths, lastUpdate };

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${resApi}/daily`);

    //console.log(data);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,

    }));
    
    return modifiedData;
  } catch (error) {
    
  }
}

export const countries = async () => {
  try {
    
  } catch (error) {
    
  }
}
