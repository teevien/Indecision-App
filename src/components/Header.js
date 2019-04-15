import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <h1>
            Expensify
  </h1>
        <NavLink
            activeClassName="active"
            ariaCurrent="true"
            to="/"
        >
            Home
  </NavLink>
        <NavLink
            activeClassName="active"
            ariaCurrent="true"
            to="/create"
        >
            Add Expense
  </NavLink>
        <NavLink
            activeClassName="active"
            ariaCurrent="true"
            to="/help"
        >
            Help
  </NavLink>
    </div>
);

export default Header;