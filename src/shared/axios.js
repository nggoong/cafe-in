import axios from 'axios';


const instance = axios.create({
    baseURL:process.env.REACT_APP_API_URL
})


instance.interceptors.request.use((config) => {
    const access_token = localStorage.getItem('access_token');

    if(!access_token) {
        config.headers.common['access_token'] = null;
        return config;
    }
    else {
        config.headers.common['access_token'] = `Bearer ${access_token}`;
        return config;
    }
})

export default instance;