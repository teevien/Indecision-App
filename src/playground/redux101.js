import { createStore } from 'redux';

// action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1}= {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

// reducers
// 1. are PURE functions (the output is determined by the input -whatever gets passed in)
// 2. never change state or action - these will always be PASSED INTO your reducers

// eg of IMPURE function
// let a = 10; // because there is a global variable, the output does not totally depend on the input because the variable could change too so anything that uses something outside of its scope is IMPURE
// const add = (b) => {
//     return a + b;
// };

// eg of PURE function
// const add = (a, b) => {
//     return a + b;
// };

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    };
} 

const store = createStore(countReducer);

store.subscribe(() => {
    console.log('getstate', store.getState());
});


// Actions - are objects that get sent to the store
// increment, decrement, reset -- allows us to change the store over time by dispatching "action"

// increment
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// }); // dispatch allows us to send off an action object and the store can do something with the info
store.dispatch(incrementCount({incrementBy: 5}))
store.dispatch(incrementCount());

// reset
// store.dispatch({
//     type: 'RESET'
// });
store.dispatch(resetCount());

// decrement
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(decrementCount());

// store.dispatch({
//     type: 'SET',
//     count: 101
// });
store.dispatch(setCount({count: 101}));

// console.log('getstate2', store.getState());


// const add = (data) => {
//     return data.a + data.b;
// };

// const add = ({a, b}) => {
//     return a + b;
// }
// console.log(add({a:1, b: 2}));