import LoginButton from "../accounts/login";
import LogoutButton from "..//accounts/logout";
import Profile from "..//accounts/profile";
import NavAside from "../shared/nav-aside";

function MyButton() {
    return (
      <button>
          I'm a button
      </button>
    );
}


export function HomePage() {
    return (
      <div>
         <NavAside/>
         <div style={{ marginLeft: '200px', padding: '20px' }}>
          <h1>Welcome to the Habit Tracker </h1>
          <MyButton/>
          <LoginButton/>
          <Profile/>
          <LogoutButton/>
         </div>
      </div>
    )
  }