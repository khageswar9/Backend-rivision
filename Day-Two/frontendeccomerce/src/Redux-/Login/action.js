export const LOGIN_STATE="LOGIN_STATE";

export const loginState=(data,payload)=>{
 return  {
          type:LOGIN_STATE,
          payload:data
        }
} 