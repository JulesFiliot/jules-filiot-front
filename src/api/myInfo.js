import axios from 'axios';
import appConfig from '../config/config';

const endpoint = `${appConfig.baseUrlApi}/myinfo`;

const getMyInfo = () => new Promise((resolve, reject) => {
  axios.get(endpoint)
    .then((response) => resolve(response.data))
    .catch((err) => reject(err));
});
export default getMyInfo;
