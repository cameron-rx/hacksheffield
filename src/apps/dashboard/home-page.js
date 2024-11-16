import LoginButton from "../accounts/login";
import LogoutButton from "../accounts/logout";
import Profile from "../accounts/profile";
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
    <div style={{ marginLeft: '200px', padding: '20px' }}>
      <NavAside>
        <h1>Welcome to the Habit Tracker </h1>
      </NavAside>
    </div>
  )
}