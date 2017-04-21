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
        const profileResponse = yield call(api.getUser, response.data.userId);
        if (profileResponse.ok) {

            yield put(UserActions.profile(profileResponse.data));
            (profileResponse.data.role === 'client') ? Actions.clientHome() : Actions.homeScreen();
        }


      }
      else {

        yield put(UserActions.userFailure(response.data.Message))
      }


    }
   else if(type === 'SIGNUP_REQUEST') {
      const { email, password, device, device_id, role } = request
      const userData = {
        "email" : email,
        "password" : password,
        "device" : device,
        "device_id" : device_id,
        "role" : role,
        "emailVerified" : false
      }
      const response = yield call(api.signup, userData);
      console.log(response)
      if (response.ok) {

        // do data conversion here if needed
        yield put(UserActions.profile(response.data));
        const data = {
          "email" : response.data.email,
          "userId" : response.data.id
        }
        Actions.editProfile({ role : role, prevData : data})
        // Get User Profile data
        //const profileResponse = yield call(api.getUser, response.data.userId);
        //if (profileResponse.ok) {

      //      yield put(UserActions.profile(profileResponse.data));
        //    (profileResponse.data.type === 'client') ? Actions.clientHome() : Actions.homeScreen();
      //  }


      }
      else {

        yield put(UserActions.userFailure(response.data.Message))
      }


    }



}
