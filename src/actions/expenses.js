import uuid from 'uuid';

// I. ADD_EXPENSE action generator
export const addExpense = (
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
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
