import axios from "axios";

const instance = axios.create({
  // baseURL: 'https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q=',
  baseURL: 'https://www.googleapis.com/books/v1/volumes?q=',
  headers: {
    'Content-Type': 'application/json', 
  },
});

export default instance;
