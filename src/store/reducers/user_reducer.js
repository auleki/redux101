import * as ACTION_TYPE from '../actions/action_types';


const initialState = {
  user_text: 'James'
}

const UserReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_TYPE.USER_INPUT:
      return {
        ...state,
        user_text: action.payload
      }
    default: 
      return state
  }
}


export default UserReducer;
