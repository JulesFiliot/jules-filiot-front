import axios from 'axios';
import appConfig from '../config/config';

const endpoint = `${appConfig.baseUrlApi}/skills/categories`;

export const getAllCategories = () => new Promise((resolve, reject) => {
  axios.get(endpoint)
    .then((response) => resolve(response.data))
    .catch((err) => reject(err));
});

export const getOneCategory = (id) => new Promise((resolve, reject) => {
  axios.get(`${endpoint}/${id}`)
    .then((response) => resolve(response.data))
    .catch((err) => reject(err));
});
