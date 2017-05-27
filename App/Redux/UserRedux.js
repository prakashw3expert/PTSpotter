import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['username', 'password'],
  loginSuccess: ['accessToken', 'userId'],
  profile: ['data'],
  userFailure: ['error'],
  signupRequest : ['signupData'],
  updateProfile : ['token', 'userId', 'data'],
  autoLogin : ['userId', 'token'],
  facebookLogin : ['data'],
  fbSuccess : ['name', 'facebook_id'],
  logout: null
})

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  email: null,
  password : null,
  accessToken : null,
  userId : null,
  profile  : {"name" : '', "role" : ''},
  error: null,
  fetching: false,
  isLogin: false,
  newFB : false
})

/* ------------- Reducers ------------- */

// we're attempting to login
export const login = (state, { username, password }) => {
  return state.merge({ fetching: true, email : username })
}

export const facebookLogin = (state, { name, facebook_id }) => {
  return state.merge({ fetching: true })
}

// we've successfully logged in
export const loginSuccess = (state, { accessToken, userId }) => {

  return state.merge({ fetching: true, error: null, accessToken, userId, isLogin : true })
}

export const fbSuccess = (state, { facebook_id, name, accessToken, userId }) => {

  return state.merge({ newFB: true, error: null, name,accessToken, userId, isLogin : false })
}


// attempt to signup
export const signup = (state, { data }) => {
  return state.merge({ fetching: true })
}


// we've had a problem logging in
export const failure = (state, { error }) =>
  state.merge({ fetching: false, error })


  // we've successfully logged in
  export const profile = (state, { data }) => {
    console.log('Profile Data Saved in Redux : ',data)
    return state.merge({ fetching: false, error: null, profile : data, isLogin : true })
  }

  export const updateProfile = (state, { token, userId }) => {
    return state.merge({ fetching: true })
  }

  export const autoLogin = (state, { token, userId }) => {
    return state.merge({ fetching: true })
  }

// we've logged out
export const logout = (state) => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: login,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.PROFILE]: profile,
  [Types.USER_FAILURE]: failure,
  [Types.SIGNUP_REQUEST]: signup,
  [Types.LOGOUT]: logout,
  [Types.UPDATE_PROFILE]: updateProfile,
  [Types.AUTO_LOGIN]: autoLogin,
  [Types.FACEBOOK_LOGIN]: facebookLogin
})
