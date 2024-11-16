// import logo from './logo.svg';
// import './App.css';
import LoginButton from "./apps/accounts/login";
import LogoutButton from "./apps/accounts/logout";
import Profile from "./apps/accounts/profile";
import NavAside from "./apps/shared/nav-aside";

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
      <NavAside />
      <div style={{ marginLeft: '200px', padding: '20px' }}>
       <h1>Welcome to my app</h1>
       <MyButton/>
       <LoginButton/>
       <Profile/>
       <LogoutButton/>
      </div>

    </div>
  )
}
