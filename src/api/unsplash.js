import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID PXT6SANh6gTHHMkYgtWyam3cYLy9tKEEkRGEWyXoCPo'
  }
});