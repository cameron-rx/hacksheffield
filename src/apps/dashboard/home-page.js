// import LoginButton from "../accounts/login";
// import LogoutButton from "../accounts/logout";
// import Profile from "../accounts/profile";
// import NavAside from "../shared/nav-aside";
import './home-page.css';
import { StatisticsComponent } from './statistics/statistics-component';


export function HomePage() {
  return (
    <div className="container mt-4">
        <StatisticsComponent />
        
      <div className="row mt-3">
        <div className="col-12 bg-danger text-white text-center py-4">Full Width Row</div>
      </div>
  </div>
  )
}