import React from 'react';

const NavAside = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#habits">Habits</a></li>
        <li><a href="#add-habit">+ Add a New Habit</a></li>
      </ul>


      <style jsx>{`
        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          width: 200px;
          background-color: #2c3e50;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
        }

        .sidebar ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
          width: 100%;
        }

        .sidebar ul li {
          width: 100%;
          margin-bottom: 20px;
        }

        .sidebar ul li a {
          text-decoration: none;
          color: #ecf0f1;
          padding: 15px 20px;
          display: block;
          text-align: center;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }

        .sidebar ul li a:hover {
          background-color: #34495e;
        }

        .sidebar ul li a.active {
          background-color: #1abc9c;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default NavAside;
