import { takeLatest } from 'redux-saga/effects'

import { UserTypes } from '../Redux/UserRedux'
import { OpenScreenTypes } from '../Redux/OpenScreenRedux'

/* ------------- Sagas ------------- */


import { user } from './UserSagas'

import { openScreen } from './OpenScreenSagas'



/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action

    takeLatest(UserTypes.LOGIN_REQUEST, user),

    // some sagas receive extra parameters in addition to an action

  ]
}
