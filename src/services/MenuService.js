import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.mocki.io/v1/f35d6719',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getMenu() {
    return apiClient.get('')
  },
  
  getCategory(id) {
    return apiClient.get('/' + id)
  },
  getDish(id){
    return apiClient.get('/' + id)
  }
  
}
