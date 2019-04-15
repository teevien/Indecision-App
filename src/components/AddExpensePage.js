import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';


export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense); // refactored from onSubmit to addExpense to reflect the action being called
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    };
};

// for testable code
const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense)) // this is an implicitly returns object 
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);