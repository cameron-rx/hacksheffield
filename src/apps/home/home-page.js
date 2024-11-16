import LoginButton from "../accounts/login";
import LogoutButton from "..//accounts/logout";
import Profile from "..//accounts/profile";

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
         <MyButton/>
         <LoginButton/>
         <Profile/>
         <LogoutButton/>
      </div>
    )
  }