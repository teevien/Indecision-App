import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// I. ADD_EXPENSE action generator
const addExpense = (
    {
        description = '', // provided by user, if not use empty string
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description, //updates expense object with values from above
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE action generator
// note: it is an arrow function which implicity returns an object, we need to pass in some data --> this data comes from store.dispatch --> we destructure that object, it it doesnt exist then destructure empty object

// we'll be pulling off id, no default required
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

// ----------------------------------------------------------------------------------------

// 2. create default state
const expensesReducerDefaultState = [];

// 1. create expenses reducer
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    // 3. set up switch statements
    switch(action.type) {
        // v. set up case 
        // note: using .concat() will create a new array with the new item, .push() changes the original array
        case 'ADD_EXPENSE':
        return [
            ...state, // spread operator - does same thing as concat
            action.expense // add the expense object from addExpense
        ];
        case 'REMOVE_EXPENSE':
        // filter doesnt change original array, it will return a new array with a subset of the value
        return state.filter(({ id }) => id !== action.id);
        // it this function returns true, item will be kept in array, if false then it will be removed
        case 'EDIT_EXPENSE':
        // map through each expense in the array, determine if theres a matching id - if ids are matching then update the amount
        return state.map((expense) => {
            if(expense.id === action.id) {
                // if they mathch, return expense object -- spread out and replace the matching key (amount:500)
                return {
                    ...expense,
                    ...action.updates
                };
            } else {
                return expense; // otherwise, no change at all
            };
        });
        // 4. set up default case
        default:
        return state;
    }
};


const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
        return {
            ...state,
            text: action.text
        };
        case 'SORT_BY_AMOUNT':
        return {
            ...state,
            sortBy: 'amount'
        };
        case 'SORT_BY_DATE':
        return {
            ...state,
            sortBy: 'date'
        };
        case 'SET_START_DATE':
        return {
            ...state,
            startDate: action.startDate
        };
        case 'SET_END_DATE':
        return {
            ...state,
            endDate: action.endDate
        };
        default:
            return state;
    }
};

// ----------------------------------------------------------------------------------------

// create variable, pass in the complete expenses array and filters
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        // check -- if typeof startDate does NOT equal to a number then it will equal TRUE
        // therefore if its true it won't get filtered
        // if it does equal a number AND the date createdAt is greater than startDate -- it will be filtered
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
        // sort is similar to filter -- gets called on an array and returns an array
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        }
    })
};

// ----------------------------------------------------------------------------------------

// combine multiple reducers into a single store
const store = createStore(
    // 1. as first argument to createStore - call combineReducers function
    combineReducers({
        // 2. combineReducers takes its own argument which is an object
        // keys provided are the same as the root state name, the value will be the corresponding reducer
        expenses:expensesReducer,
        filters: filtersReducer
    })
);

// ii. track changes, everytime callback function runs - print state to console
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})


// iii. dispatch the action generators here - pass in object with the related key-value pairs

// iv. to retrieve data from an action object (like id) we can wrap it in this variable and it will return the action object

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -10000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));
// console.log(expenseOne);
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// we created the call to the function which will take in 2 arguments - the ID of the specific expense to edit and the amount to override
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('re'));

// SORTBYAMOUNT 1
// store.dispatch(sortByAmount());

// SORTBYDATE 1
// store.dispatch(sortByDate()); 

// SETSTARTDATE 1
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());

// SETENDDATE 1
// store.dispatch(setEndDate(1250));


// ----------------------------------------------------------------------------------------



const demoState = {
    // root state name
    expenses: [{
        // reducer will handle this object
        id: 'someid',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    // root state name
    filters: {
        text: 'rent',
        sortBy: 'amount', // can be date or amount
        startDate: undefined,
        endDate: undefined
    }
};


// object spread operator
// const user = {
//     name: 'Teresa',
//     age: 25
// };
// console.log({...user, 'location': 'Toronto', age: 27});

// var items = [
//     { name: 'Edward', value: 21 },
//     { name: 'Sharpe', value: 37 },
//     { name: 'And', value: 45 },
//     { name: 'The', value: -12 },
//     { name: 'Magnetic', value: 13 },
//     { name: 'Zeros', value: 37 }
// ];

// // sort by value
// items.sort(function (a, b) {
//     return a.value - b.value;
// });

// // sort by name
// items.sort(function (a, b) {
//     var nameA = a.name.toUpperCase(); // ignore upper and lowercase
//     var nameB = b.name.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//         return -1;
//     }
//     if (nameA > nameB) {
//         return 1;
//     }

//     // names must be equal
//     return 0;
// });

// console.log(items);


