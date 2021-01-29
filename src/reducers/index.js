import {combineReducers} from 'redux'

import errorReducers from './errorReducers'
import imagesReducers from './imagesReducers'
import loadingReducers from './loadingReducers'

const rootReducer = combineReducers({
    isLoading:loadingReducers,
    images:imagesReducers,
    error:errorReducers
})
export default rootReducer;