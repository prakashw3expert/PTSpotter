import AppConfig from  "../Config/AppConfig"

/**
 * Mocking client-server processing
 */
import {create} from 'apisauce'

const serviceUrl = create({
  baseURL: AppConfig.ApiUrl
})

const defaultAuthKey = 'EBpSHxcz3vUdegEoHuScH7nRON4DqufG25erifY3nsMXDIqcjB4ctzncypQJ0q8E';
export const api = {

  login(email, password) {
    return serviceUrl.post('/users/login', {email : email, password : password})
  },

  getUser(userId) {
    return serviceUrl.get('/users/' + userId)
  },

  signup(data) {
    return serviceUrl.post('/users',data)
  },

  clientSearch() {
    return serviceUrl.get('/users/search-clients')
  },

  trainerSearch() {
    return serviceUrl.get('/users/search-trainers')
  }


}
