import AppConfig from  "../Config/AppConfig"

/**
 * Mocking client-server processing
 */
import {create} from 'apisauce'

const serviceUrl = create({
  baseURL: AppConfig.ApiUrl
})

const defaultAuthKey = 'HdsmsFfWJBKrFPLNOM2jIC5HdtDkseCN9NM6IdsVFBstefDMePWizig4UjPGySxP';
export const api = {

  login(email, password) {
    return serviceUrl.post('/users/login', {email : email, password : password})
  },

  getUser(userId, AccessToken) {
    console.log(AccessToken)
    return serviceUrl.get('/users/' + userId + '?access_token=' + AccessToken, {})
  },

  signup(data) {
    return serviceUrl.post('/users',data)
  },

  clientSearch(AccessToken) {
    return serviceUrl.get('/users/search-clients?access_token=' + AccessToken)
  },

  trainerSearch(AccessToken) {
    return serviceUrl.get('/users/search-trainers?access_token=' + AccessToken)
  },

  ArticleList(AccessToken) {
    return serviceUrl.get('/Articles/list-articles?access_token=' + AccessToken)
  },

  updateProfile(AccessToken, userId, data) {
    return serviceUrl.patch('/users/' + userId + '?access_token=' + AccessToken, data)
  },

  getCategories(AccessToken) {
    return serviceUrl.get('/categories?access_token=' + AccessToken, {})
  },

  commentCounts(articleId, AccessToken) {
    return serviceUrl.get('/Articles/' + articleId + '/comments/count?access_token=' + AccessToken, {})
  },

  postComment(articleId, AccessToken, comment) {
    return serviceUrl.post('/Articles/' + articleId + '/comments?access_token=' + AccessToken, comment)
  },

  getComments(articleId, AccessToken) {
    return serviceUrl.get('/Articles/' + articleId + '/comments?filter[include]=user&access_token=' + AccessToken , {})
  },

  getNotes(userId, AccessToken) {
    return serviceUrl.get('/users/' + userId + '/notes?access_token=' + AccessToken , {})
  },

  postNotes(userId, AccessToken, note) {
    return serviceUrl.post('/users/' + userId + '/notes?access_token=' + AccessToken , note)
  },

  getSchedules(userId, AccessToken) {
    return serviceUrl.get('/users/' + userId + '/schedules?access_token=' + AccessToken , {})
  },

  postSchedules(userId, AccessToken, schedule) {
    return serviceUrl.post('/users/' + userId + '/schedules?access_token=' + AccessToken , schedule)
  },

  getSessionsTrainer(trainerId, AccessToken) {
    return serviceUrl.get('/Sessions?filter[include]=user&filter[include]=trainer&filter[include]=workouts&filter[where][trainerId]='+ trainerId +'&access_token=' + AccessToken , {})
  },

  getSessionsClient(userId, AccessToken) {
    return serviceUrl.get('/Sessions?filter[include]=user&filter[include]=trainer&filter[include]=workouts&filter[where][userId]='+ userId +'&access_token=' + AccessToken , {})
  },


}
