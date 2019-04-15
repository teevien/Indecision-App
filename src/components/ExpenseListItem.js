import React from 'react'; // because we're using JSX
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}> {/* 1. create link - accesses the current items id and routes to that page */}
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
        {/*<button onClick={() => {
            dispatch(removeExpense({ id }));
        }}>Remove</button>*/}
    </div>
);

export default ExpenseListItem;
// export default connect()(ExpenseListItem);
