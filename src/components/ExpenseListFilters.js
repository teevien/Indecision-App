import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from  'react-dates';


// create named export
export class ExpenseListFilters extends React.Component {
    state = {
        calenderFocused: null,
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calenderFocused) => {
        this.setState(() => ({ calenderFocused }));
    };

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
        // console.log(e.target.value);
    };

    onSelectChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount();
        };
    };

    render() {
        return (
            <div className="filters">
                <input
                    type="text" placeholder="Search Expenses" value={this.props.filters.text} // CHANGE TO "THIS.PROPS"
                    onChange={this.onTextChange} />
                <select
                    value={this.props.filters.sortBy}
                    onChange={this.onSelectChange}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

// refactor the above class to remove dispatch and directly call the methods
const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);






// BECAUSE WE HAVE CHANGED THIS FROM A STATELESS FUNCTION COMPONENT INTO A CLASS COMPONENT WE MUST USE 'THIS.PROPS' INSTEAD OF JUST 'PROPS'


// const ExpenseListFilters = (props) => (
//     <div>
//         <input 
//         type="text" value={props.filters.text} 
//         onChange={(e) => { 
//             props.dispatch(setTextFilter(e.target.value));
//             // console.log(e.target.value);
//         }} />
//         <select 
//         value={props.filters.sortBy} 
//         onChange={(e) => {
//             if (e.target.value === 'date') {
//                 props.dispatch(sortByDate());
//             } else if (e.target.value === 'amount') {
//                 props.dispatch(sortByAmount());
//             }
//         }}
//         >
//             <option value="date">Date</option>
//             <option value="amount">Amount</option>
//         </select>
//     </div>
// );
