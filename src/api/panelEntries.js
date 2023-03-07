import axios from 'axios';
import appConfig from '../config/config';

const endpoint = `${appConfig.baseUrlApi}/panels/panelentries`;

export const getAllPanelEntries = () => new Promise((resolve, reject) => {
  axios.get(endpoint)
    .then((response) => resolve(response.data))
    .catch((err) => reject(err));
});

export const getOnePanelEntry = (id) => new Promise((resolve, reject) => {
  axios.get(`${endpoint}/${id}`)
    .then((response) => resolve(response.data))
    .catch((err) => reject(err));
});
