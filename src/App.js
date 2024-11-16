// import logo from './logo.svg';
// import './App.css';


import NavAside from "./apps/shared/nav-aside";

import { BrowserRouter } from 'react-router-dom';
import { CurrentPageRouter } from './apps/shared/router';
import './apps/shared/nav-aside.css';
import './App.css';

export default function App() {
  return (
    <div className="mainPage">
      <BrowserRouter>
        <div className="sidebar">
          <NavAside />
        </div>
        <div className="content">
          <CurrentPageRouter />
        </div>
      </BrowserRouter>
    </div>
  );
}
