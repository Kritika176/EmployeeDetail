import { LOGIN_DATA } from "./action";

const initialState = {
    token:"",
    loginStatus:false
};
export const loginReducer = (state=initialState,{type,payload}) => {
  switch(type)
  {
    case LOGIN_DATA:
        return {
          ...state,
        token:payload,
        loginStatus:true
        };
        default:
            return state;
  }
};