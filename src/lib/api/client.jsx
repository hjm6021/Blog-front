import axios from 'axios';

const client = axios.create();
client.defaults.baseURL = 'http://www.jmhan-blog.com/';

export default client;
