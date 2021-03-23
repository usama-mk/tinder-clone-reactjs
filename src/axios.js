import axios from 'axios';

const instance= axios.create({
    baseURL: 'https://tinder-clone-backend-0.herokuapp.com'
})

export default instance;