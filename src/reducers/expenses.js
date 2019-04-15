// 2. create default state
const expensesReducerDefaultState = [];

// 1. create expenses reducer
export default (state = expensesReducerDefaultState, action) => {
    // 3. set up switch statements
    switch (action.type) {
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
                if (expense.id === action.id) {
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

// export default expensesReducer;