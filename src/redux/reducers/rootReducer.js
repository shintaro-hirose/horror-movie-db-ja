import dataReducer from './dataReducer'
import uiReducer from './uiReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  data: dataReducer,
  UI: uiReducer,
});

export default rootReducer;