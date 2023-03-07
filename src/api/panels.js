import axios from 'axios';
import appConfig from '../config/config';

const endpoint = `${appConfig.baseUrlApi}/panels`;

export const getAllPanels = () => new Promise((resolve, reject) => {
  axios.get(endpoint)
    .then((response) => resolve(response.data))
    .catch((err) => reject(err));
});

export const getOnePanel = (id) => new Promise((resolve, reject) => {
  axios.get(`${endpoint}/${id}`)
    .then((response) => resolve(response.data))
    .catch((err) => reject(err));
});
