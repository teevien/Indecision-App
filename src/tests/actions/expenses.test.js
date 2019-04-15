// grab all the action genertor functions
import { addExpense, editExpense, removeExpense } from '../../actions/expenses';


// 1. set up test for removeExpense
test('should set up removeExpense action object', () => {
    // 2. create const that holds the result of the removeExpense function
    const action = removeExpense({ id: '123abc' });
    // 3. create what we expect from the action
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});
// ** NOTE ** when we are passing in object with key-value pairs, the toBe(); method doesn't work because it looks for exact match and {} === {} is false (same with arrays) therefore use toEqual();


// 1. set up test for editExpense
test('should set up editExpense action object', () => {
    // 2. create const which holds result of the removeExpense
    const action = editExpense( '123abc', { note: 'new note'});
    // note that this function takes in different arguments than removeExpense - follow same format
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'new note'
        }
    });
});


// 1. set up test for addExpense 
test('should set up add expense object with provided values', () => {
    // 2. create const for the data that gets passed to create an expense
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'this was last month\'s rent'
    };

    // 3. create const which holds result of addExpense function when we pass in data
    const action = addExpense(expenseData);
    
    // 4. what we expect
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            // use spread operator to pass in each individual key-value pair of expenseData
            ...expenseData,
            // use expect.any because we are using UUID, we don't care what the unique id, just as long as we expect a string.
            id: expect.any(String),
        }
    });
});

test('should set up add expense object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
})