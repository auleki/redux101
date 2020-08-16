import * as ACTION_TYPE from '../actions//action_types';

const initialState = {
  stateProp1: false
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_TYPE.SUCCESS:
      return {
        ...state, 
        stateProp1: true
      }
    case ACTION_TYPE.FAILURE:
      return {
        ...state,
        stateProp1: false
      }
    default:
      return state 
  }
}

export default rootReducer;