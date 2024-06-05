import axios from 'axios';

export default axios.create({
  baseURL: process.env.IDLERPG_API,
  headers: {},
});
