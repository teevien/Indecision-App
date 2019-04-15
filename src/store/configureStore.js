import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

// created export so that when we import it elsewhere we just call it and use it
export default () => {
    // combine multiple reducers into a single store
    const store = createStore(
        // 1. as first argument to createStore - call combineReducers function
        combineReducers({
            // 2. combineReducers takes its own argument which is an object
            // keys provided are the same as the root state name, the value will be the corresponding reducer
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};

