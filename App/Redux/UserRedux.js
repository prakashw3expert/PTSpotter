import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['username', 'password'],
  loginSuccess: ['accessToken', 'userId'],
  profile: ['data'],
  userFailure: ['error'],
  signupRequest : ['email', 'password', 'device', 'device_id', 'role'],
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
  isLogin: false
})

/* ------------- Reducers ------------- */

// we're attempting to login
export const login = (state, { username, password }) => {
  return state.merge({ fetching: true, email : username })
}

// we've successfully logged in
export const loginSuccess = (state, { accessToken, userId }) => {

  return state.merge({ fetching: true, error: null, accessToken, userId, isLogin : true })
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
    console.log(data)
    return state.merge({ fetching: false, error: null, profile : data, isLogin : true })
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
  [Types.LOGOUT]: logout
})
