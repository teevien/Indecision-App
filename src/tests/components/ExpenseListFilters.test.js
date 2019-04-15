import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import moment from 'moment';
// need to create another fixtures for filter data
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            setstartDate={setStartDate}
            setEndDate={setEndDate}
            filters={filters}
            sortByAmount={sortByAmount}
        />
    );
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with altData correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

// should handle text change
test('should handle text change', () => {
    const value = 'rent'
    wrapper.find('input').simulate('change', { // so that it finds the onChange of e.target.value
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

// should sort by date
test('should sort by date', () => {
    const value = 'date'
    wrapper.setProps({ // switch the value
        filters: altFilters
    });
    wrapper.find('select').simulate('change', {
        target: { value } 
    });
    expect(sortByDate).toHaveBeenCalled();
});

// should sort by amount
test('should sort by amount', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

// should handle date change
test('should handle date changes', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate= moment(0).add(8, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});


// should handle date focus change
test('hould handle date focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});