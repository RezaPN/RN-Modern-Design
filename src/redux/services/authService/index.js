import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage/lib/typescript/EncryptedStorage';

const API_URL = 'http://foodmarket-backend.buildwithangga.id';

const login = data => {
  return axios.post(`${API_URL}/api/login`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => {
    if (response.data.access_token) {
      EncryptedStorage.setItem('user_session', JSON.stringify(response.data));
    }
    return response.data;
  }).catch(error => {
    throw new Error(error.message);
  });
};

const authService = {
  login,
};

export default authService;

