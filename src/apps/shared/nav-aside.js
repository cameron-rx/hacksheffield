import React from 'react';
import {Link} from 'react-router-dom';

const NavAside = () => {
  return (
    <div>
      <ul>
        <li> <Link to="/">Dashboard</Link>  </li>
        <li> <Link to="/habits">Habits</Link> </li>
        <li> <Link to="/add-habit"> + Add a new Habit</Link> </li>
      </ul>
    </div>
  );
};

export default NavAside;
