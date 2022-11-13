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
/******************************************************************************/
/*const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const defaultState = {
    authenticated: false
};
  
const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            return {authenticated: true};
        case LOGOUT:
            return {authenticated: false};
        default:
            return state;
    }
};
  
const store = Redux.createStore(authReducer);
  
const loginUser = () => {
    return {
        type: LOGIN
    }
};
  
const logoutUser = () => {
    return {
        type: LOGOUT
    }
};*/

//Register a store listener
/**********************************************************************/
/*const ADD = 'ADD';

const reducer = (state = 0, action) => {
    switch(action.type) {
        case ADD:
            return state + 1;
        default:
            return state;
    }
};

const store = Redux.createStore(reducer);

let count = 0;

function increment() {
    return count++;
}

store.subscribe(increment);

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);*/

//Combine multiple reducers
/*************************************************************************/
/*const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                authenticated: true
            }
        case LOGOUT:
            return {
                authenticated: false
            }
        default:
            return state;
    }
};

const rootReducer = Redux.combineReducers({
    auth: authReducer,
    count: counterReducer
});

const store = Redux.createStore(rootReducer);*/

//Send action data to the store
/***********************************************************************/
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
    switch(action.type) {
        case ADD_NOTE:
            return action.text;
        default:
            return state;
    }
};

const addNoteText = (note) => {
  return {
    type: ADD_NOTE,
    text: note
  }
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());

//Use Middleware to Handle Asynchronous Actions
/*************************************************************************/
