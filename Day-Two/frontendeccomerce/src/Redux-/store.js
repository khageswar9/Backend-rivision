import { legacy_createStore as createStore,combineReducers } from "redux";
import { Loginreduser } from "./Login/reduser";


const RootReduser=combineReducers({
  state:Loginreduser
});

export const store=createStore(
    RootReduser,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
    );
