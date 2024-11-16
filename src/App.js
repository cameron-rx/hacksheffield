// import logo from './logo.svg';
// import './App.css';
import LoginButton from "./apps/accounts/login";
import LogoutButton from "./apps/accounts/logout";
import Profile from "./apps/accounts/profile";
import NavAside from "./apps/shared/nav-aside";
import Habits from "./apps/habits/habitsPage";

import { BrowserRouter } from 'react-router-dom';
import { MyRouter, Navigation } from './apps/shared/navigation';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <Auth0Provider />
//     </div>
//   ); 
// }

// export default App;


function MyButton() {
  return (
    <button>
        I'm a button
    </button>
  );
}



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavAside />
        <MyRouter />
      </BrowserRouter>
    </div>


  );
}