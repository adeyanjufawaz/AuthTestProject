import axios from "axios";

export default axios.create({
  baseURL: 'https://studio-api.apps.gentimedia.tech/api/auth',
});