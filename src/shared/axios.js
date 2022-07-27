import axios from 'axios';


const instance = axios.create({
    baseURL:process.env.REACT_APP_API_URL
})


instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('Authorization');

    if(!token) {
        console.log(token);
        config.headers.common['Authorization'] = null;
        return config;
    }
    else {
        console.log(token);
        config.headers.common['Authorization'] = `${token}`;
        return config;
    }
})

export default instance;