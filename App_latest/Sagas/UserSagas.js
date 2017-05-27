import { call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import UserActions from '../Redux/UserRedux'


import {api} from  "../Services/Api"
import { Actions } from 'react-native-router-flux'
// attempts to login
export function * user (request) {
    const { type } = request
    console.log(type);
    if(type === 'LOGIN_REQUEST') {
      const { username, password } = request
      const response = yield call(api.login, username, password);
      console.log(response)

      if (response.ok) {

        // do data conversion here if needed
        yield put(UserActions.loginSuccess(response.data.id, response.data.userId));

        // Get User Profile data
        const profileResponse = yield call(api.getUser, response.data.userId, response.data.id);

        console.log('got User Data as Login Response',profileResponse);
        if (profileResponse.ok) {
            console.log('get user data : ',profileResponse);
            yield put(UserActions.profile(profileResponse.data));
            (profileResponse.data.role === 'client') ? Actions.clientHome() : Actions.homeScreen();
        }


      }
      else {

        yield put(UserActions.userFailure(response.data.error))
      }


    }
   else if(type === 'SIGNUP_REQUEST') {
      const { email, password, device, device_id, role, mobile } = request
      const userData = {
        "email" : email,
        "password" : password,
        "device" : device,
        "device_id" : device_id,
        "role" : role,
        "phone" : mobile,
        "emailVerified" : false
      }
      const response = yield call(api.signup, userData);
      console.log(response)
      if (response.ok) {

        yield put(UserActions.loginSuccess(response.data.token, response.data.id));
        // do data conversion here if needed
        const profileData = {
          "email" : response.data.email,
          "userId" : response.data.id,
          "name" : '',
          "role" : role,
          "phone" : response.data.phone,
        }
        yield put(UserActions.profile(profileData));
        const data = {
          "email" : response.data.email,
          "userId" : response.data.id,
          "phone" : response.data.phone,
        }
        Actions.editProfile({ role : role, prevData : data})
        // Get User Profile data
        //const profileResponse = yield call(api.getUser, response.data.id);
        //if (profileResponse.ok) {

      //      yield put(UserActions.profile(profileResponse.data));
        //    (profileResponse.data.type === 'client') ? Actions.clientHome() : Actions.homeScreen();
      //  }


      }
      else {

        yield put(UserActions.userFailure(response.data.error))
      }


    }
    else if(type === 'UPDATE_PROFILE') {
       const { token, userId, data } = request

       const response = yield call(api.updateProfile,token, userId, data);
       console.log(response)
       if (response.ok) {
         // do data conversion here if needed

         yield put(UserActions.profile(response.data));

         alert('Profile updated')


       }
       else {

         yield put(UserActions.userFailure(response.data.error))
       }


     }



}
