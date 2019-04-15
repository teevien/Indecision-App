import React from 'react';
// 3. created HOC's using connect
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.length === 0 ? ( <p>No Expenses</p>) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} />
                })
            )
        }
        {/* {props.expenses.map((expense) => { 
        //     return <ExpenseListItem key={expense.id} {...expense}/>
        // })} */}
    </div>
);

// 5. define the things we want to get from the store
const mapStateToProps = (state) => {
    return {
        // name: 'Teresa' // now that we have initialized a prop, we can use it above in the ExpenseList component
        // expenses: state.expenses, // now we can access info from the store
        // filters: state.filters
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

// 4. call connect as export default, pass in the function that will retrieve data from the store
export default connect(mapStateToProps)(ExpenseList); 
// 5. define the component that we want to create the connected version of -- the result is a brand new component, which is just our component with the props from the store

// export default ConnectedExpenseList; // rendering the higher component which has the ExpenseList pass in