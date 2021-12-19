import axios from 'axios';

const URL = 'http://localhost:4000/';

const getCategories = () => axios.get(`${URL}categories`);

export { getCategories };
