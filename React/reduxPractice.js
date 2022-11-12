/*const defaultState = {
    login: false
};
  
const reducer = (state = defaultState, action) => {
    if (action.type === "LOGIN") {
        return {
            login: true
        };
    } else {
        return state;
    }
};
  
const store = Redux.createStore(reducer);
  
const loginAction = () => {
    return {
        type: "LOGIN"
    };
};*/

// Using Switch statements
const defaultState = {
    authenticated: false
};
  
const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {authenticated: true};
        case 'LOGOUT':
            return {authenticated: false};
        default:
            return defaultState;
    }
};
  
const store = Redux.createStore(authReducer);
  
const loginUser = () => {
    return {
        type: 'LOGIN'
    }
};
  
const logoutUser = () => {
    return {
        type: 'LOGOUT'
    }
};