import axios from "axios";

const resApi = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(resApi);

    const stateData = { confirmed, recovered, deaths, lastUpdate };

    return stateData;
  } catch (error) {}
};
