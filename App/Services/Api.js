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

  facebookLogin(LoginData) {
    return serviceUrl.post('/users/facebook-login', LoginData)
  },

  getUser(userId, AccessToken) {
    console.log(AccessToken)
    return serviceUrl.get('/users/' + userId + '?access_token=' + AccessToken, {})
  },

  signup(data) {
    return serviceUrl.post('/users',data)
  },

  clientSearch(AccessToken, searchFilter) {
    return serviceUrl.post('/users/search-clients?access_token=' + AccessToken, searchFilter)
  },

  trainerSearch(AccessToken, searchFilter) {
    return serviceUrl.post('/users/search-trainers?access_token=' + AccessToken, searchFilter)
  },

  ArticleList(AccessToken, userId) {
    return serviceUrl.get('/Articles/?filter={"counts" : "comments","order":["createdAt DESC"], "include": {"relation": "favorites","scope" : {"where" : {"userId" : "' + userId + '"}}}}&access_token=' + AccessToken)
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

  updateSchedules(userId, scheduleId, AccessToken, schedule) {
    return serviceUrl.put('/users/' + userId + '/schedules/' + scheduleId + '?access_token=' + AccessToken , schedule)
  },

  deleteSchedules(userId, scheduleId, AccessToken) {
    return serviceUrl.delete('/users/' + userId + '/schedules/' + scheduleId + '?access_token=' + AccessToken , {})
  },

  getSessionsTrainer(trainerId, AccessToken) {
    return serviceUrl.get('/Sessions?filter[include]=user&filter[include]=trainer&filter[where][trainerId]='+ trainerId +'&access_token=' + AccessToken , {})
  },

  getSessionsClient(userId, AccessToken) {
    return serviceUrl.get('/Sessions?filter[include]=user&filter[include]=trainer&filter[where][userId]='+ userId +'&access_token=' + AccessToken , {})
  },

  getOngoingSessionsForUser(userId, AccessToken) {
    return serviceUrl.get('/Sessions?filter[where][userId]='+ userId +'&access_token=' + AccessToken , {})
  },

  getOngoingSessionsForTrainere(trainerId, AccessToken) {
    return serviceUrl.get('/Sessions?filter[where][trainerId]='+ trainerId +'&access_token=' + AccessToken , {})
  },

  postStartSession( AccessToken, session) {
    return serviceUrl.post('/Sessions?access_token=' + AccessToken, session)
  },

  endSession( sessionId, AccessToken, endTime) {
    return serviceUrl.patch('/Sessions/' + sessionId + '?access_token=' + AccessToken, endTime)
  },

  postNotificationAlert(userId, AccessToken, info) {
    return serviceUrl.post('/users/' + userId + '/notificationTimes?access_token=' + AccessToken, info)
  },

  getNotificationAlert(userId, AccessToken) {
    return serviceUrl.get('/users/' + userId + '/notificationTimes?access_token=' + AccessToken, {})
  },

  deleteNotificationAlert(userId, notification_id, AccessToken, info) {
    return serviceUrl.delete('/users/' + userId + '/notificationTimes/' + notification_id + '?access_token=' + AccessToken, info)
  },

  likeArticle( AccessToken, info) {
    return serviceUrl.post('/Favorites?access_token=' + AccessToken, info)
  },

  getArticleLikes(articleId, AccessToken) {

    return serviceUrl.get('/Articles/' + articleId + '/favorites?filter={"include": {"relation": "user","scope" : {"fields": ["id","name","image"], "where":{"id" :  { "neq":  null }}}}}&access_token=' + AccessToken, {})
  },

  uploadImage(imageData) {
    return serviceUrl.post('Containers/profileImage/upload', imageData)
  },

  uploadGalleryImage(imageData) {
    return serviceUrl.post('Containers/gallery/upload', imageData)
  },

  postReview(AccessToken, review) {
    return serviceUrl.post('/reviews?access_token=' + AccessToken, review)
  },

  getReview(trainerId, AccessToken) {
    var filter = {"where" : {"trainerId" : trainerId },"include": {"relation": "user","scope" : {"fields": ["id","name","image"]}}};
    filter = JSON.stringify(filter)
    return serviceUrl.get('/reviews?filter=' + filter + '&access_token=' + AccessToken)
  },

  getReviewCount(trainerId, userId, AccessToken) {
    var filter = {"trainerId" : trainerId, "userId" : userId };
    filter = JSON.stringify(filter)
    return serviceUrl.get('/reviews/count?where=' + filter + '&access_token=' + AccessToken)
  }


}
