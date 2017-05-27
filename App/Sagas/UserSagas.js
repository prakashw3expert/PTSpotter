import { call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import UserActions from '../Redux/UserRedux'


import {api} from  "../Services/Api"
import { Actions } from 'react-native-router-flux'
import { AsyncStorage } from 'react-native'
// attempts to login
export function * user (request) {
    const { type } = request
    console.log(type);
    if(type === 'LOGIN_REQUEST') {
      const { username, password } = request
      const response = yield call(api.login, username, password);
    //  console.log(response)

      if (response.ok) {
        // do data conversion here if needed
        yield put(UserActions.loginSuccess(response.data.id, response.data.userId));
        // Get User Profile data
        const profileResponse = yield call(api.getUser, response.data.userId, response.data.id);
      //  console.log('got User Data as Login Response',profileResponse);
        if (profileResponse.ok) {
            //console.log('get user data : ',profileResponse);
            yield put(UserActions.profile(profileResponse.data));
            AsyncStorage.multiSet([
                ['userId', profileResponse.data.id],
                ['ptspotter_accessToken', response.data.id]
              ]);

            Actions.homeScreen();
        }


      }
      else {

        alert(response.data.error.code)
        yield put(UserActions.userFailure(response.data.error.message))
      }


    }
    else if(type === 'SIGNUP_REQUEST') {
      const { signupData } = request;
      const response = yield call(api.signup, signupData);
      if (response.ok) {
        //console.log('this is what i looking : ', response)
        yield put(UserActions.loginSuccess(response.data.token, response.data.id));
        // do data conversion here if needed
        const profileData = {
          "email" : (response.data.email) ? response.data.email : '',
          "userId" : response.data.id,
          "name" : '',
          "role" : response.data.role,
          "phone" : response.data.phone,
        }
        yield put(UserActions.profile(profileData));
        const data = {
          "email" : response.data.email,
          "userId" : response.data.id,
          "phone" : response.data.phone,
        }
        Actions.editProfile()


      }
      else {

        yield put(UserActions.userFailure(response.data.error))
      }


    }
    else if(type === 'UPDATE_PROFILE') {
       const { token, userId, data } = request
       const response = yield call(api.updateProfile,token, userId, data);
       if (response.ok) {
         // do data conversion here if needed
        //  yield put(UserActions.profile(response.data));
        const profileResponse = yield call(api.getUser, userId, token);
        if (profileResponse.ok) {
            yield put(UserActions.profile(profileResponse.data));
            alert('Profile updated')
            Actions.refresh({fromSignup : true})
        }

       }
       else {
         yield put(UserActions.userFailure(response.data.error))
       }
     }
     else if(type === 'AUTO_LOGIN') {
        const { token, userId } = request
        const response = yield call(api.getUser,userId, token);
        if (response.ok) {
          // do data conversion here if needed
          yield put(UserActions.loginSuccess(token, userId));
          yield put(UserActions.profile(response.data));
          Actions.homeScreen();
        }
        else {
          yield put(UserActions.userFailure(response))
        }
      }
      else if(type === 'FACEBOOK_LOGIN') {
         const { data } = request
         const response = yield call(api.facebookLogin, data);

         if (response.ok) {
           // do data conversion here if needed
          if(!response.data.userExist){
            yield put(UserActions.loginSuccess(response.data.token, response.data.id));
            Actions.refresh({newUser : true})
          }
          else{
            AsyncStorage.multiSet([
                ['userId', response.data.id],
                ['ptspotter_accessToken', response.data.token]
              ]);
            console.log(response)
            yield put(UserActions.loginSuccess(response.data.token, response.data.id));
            yield put(UserActions.profile(response.data));
            if(response.data.name && response.data.email && response.data.phone) {
                Actions.homeScreen();
            }
            else{
              Actions.editProfile({fromSignup : true});
            }

          }

         }
         else {
           alert(response.problem)
           console.log(response)
           yield put(UserActions.userFailure(response))
         }
       }
       else if(type === 'LOGOUT') {
         //yield put(UserActions.logoutDone());
         AsyncStorage.multiRemove(['userId', 'ptspotter_accessToken']);
         Actions.launchScreen();

        }



}
