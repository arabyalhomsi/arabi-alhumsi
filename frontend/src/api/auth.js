import axios from 'axios'
import qs from 'querystring'

// temporary
const API = 'http://localhost:4003'

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}
export function getAccessToken (username, password) {
    const requestBody = {
        client_id: 'arabi_web',
        grant_type: 'password',
        username,
        password
    }
    return axios.post(API + '/token/', qs.stringify(requestBody), config)
    .catch((error) => {
        console.log(error)
    })
}