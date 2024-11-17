// import LoginButton from "../accounts/login";
// import LogoutButton from "../accounts/logout";
// import Profile from "../accounts/profile";
// import NavAside from "../shared/nav-aside";
import './home-page.css';
import { StatisticsComponent } from './statistics/statistics-component';
import ListHabits from './list-habits';


export function HomePage() {
  return (
    <div className="container mt-4 p-3">
      <StatisticsComponent />
      <div className="row mt-3">
        <div className="col-12 text-white text-center">
          <ListHabits />
        </div>    
      </div>
    </div>
  )
}