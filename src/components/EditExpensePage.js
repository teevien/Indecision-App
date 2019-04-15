import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses';

// Refactor EditExpensePage to class component
// setup mapDispatchToProps editExpense and removeExpense


export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onClick = () =>{ 
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };
     render() {
        return (
            <div>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                    expense={this.props.expense}
                />
                <button onClick={this.onClick}>Remove</button>
            </div>
        );
    };
};

// pass props through with HOC
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id) // searches through the array to find a single item
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)), // when we write dispatch here, we can remove dispatch from the functions above and just call it directly
    removeExpense: (data) => dispatch(removeExpense(data)) //pass down the object
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

// Wiring up EditExpensePage
// 1. create a link on the ExpenseListItem that will access current item's id and route to that page
// 2. set up connect 

// const EditExpensePage = (props) => {
//     console.log(props);
//     return (
//     <div>
//         {/*editing expense with id of {props.match.params.id}*/}
//         <ExpenseForm 
//             expense={props.expense}
//             onSubmit={(expense) => {
//                 // console.log('updated', expense);
//                 props.dispatch(editExpense(props.expense.id, expense));
//                 props.history.push('/');
//             }}
//         />
//         <button onClick={() => {
//             // must access dispatch with props
//                 props.dispatch(removeExpense({ id: props.expense.id }));
//                 props.history.push('/');
//             }}>Remove</button>
//     </div>
//     );
// };
