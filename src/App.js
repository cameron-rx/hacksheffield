// import logo from './logo.svg';
import NavAside from "./apps/shared/nav-aside";

import { BrowserRouter } from 'react-router-dom';
import { CurrentPageRouter } from './apps/shared/router';
import './apps/shared/nav-aside.css';
import './App.css';

export default function App() {
  return (
    <div className="mainPage">
      <BrowserRouter>
        <div className="d-flex">
          <div className="sidebar p-3" style={{ width: '250px' }}>
            <NavAside />
          </div>
          
          <div className="content flex-grow-1 p-3">
            <CurrentPageRouter />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}