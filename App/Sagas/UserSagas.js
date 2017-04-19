import { call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import UserActions from '../Redux/UserRedux'


import {api} from  "../Services/Api"
import { Actions } from 'react-native-router-flux'
// attempts to login
export function * user (request) {
    const { username, password, type } = request

    if(type === 'LOGIN_REQUEST') {
      const response = yield call(api.login, username, password);

      if (response.ok) {

        // do data conversion here if needed
        yield put(UserActions.loginSuccess(response.data.id, response.data.userId));

        // Get User Profile data
        const profileResponse = yield call(api.getUser, response.data.userId);
        if (profileResponse.ok) {

            yield put(UserActions.profile(profileResponse.data));
            Actions.homeScreen();
        }

      }
      else {

        yield put(UserActions.userFailure(response.data.Message))
      }


    }



}
