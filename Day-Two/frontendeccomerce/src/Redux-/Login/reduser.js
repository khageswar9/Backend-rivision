import { LOGIN_STATE } from "./action"
const init={state:false}
export const Loginreduser=(store=init,{type,payload})=>{

switch (type) {
    case LOGIN_STATE:
        return {...store,state:payload}

        default:
            return store;
}
}