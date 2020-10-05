import axios from 'axios';

export default axios.create({

    baseURL: 'http://localhost:8080/integrajudicial/api/white-list-orgaos-busca',

    headers: {
    }

});