// import LoginButton from "../accounts/login";
// import LogoutButton from "../accounts/logout";
// import Profile from "../accounts/profile";
// import NavAside from "../shared/nav-aside";
import './home-page.css';
import ListHabits from './list-habits';



export function HomePage() {
  return (
    <div className="container mt-4">
    <div className="row statistics-row">
      <div className="statistics-card col-md-4 bg-primary text-white d-flex justify-content-center align-items-center py-4">Column 1</div>
      <div className="statistics-card col-md-4 bg-secondary text-white d-flex justify-content-center align-items-center py-4">Column 2</div>
      <div className="statistics-card col-md-4 bg-success text-white d-flex justify-content-center align-items-center py-4">Column 3</div>    
    </div>
    <div className="row mt-3">
      <div className="col-12 bg-danger text-white text-center py-4">
        <ListHabits />
      </div>
    </div>
  </div>
  )
}