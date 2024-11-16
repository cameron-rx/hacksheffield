import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { StatisticsComponent } from "../dashboard/statistics";
import { HomePage } from '../home/home-page'

export function MyRouter() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<StatisticsComponent />} />
      </Routes>
    );
  }
  
export function Navigation() {
    return (
        <nav>
        <ul>
            <li>
            <Link to="/">Home </Link>
            </li>
            <li>
            <Link to="/dashboard">Go to Statistics</Link>
            </li>
        </ul>
        </nav>
    );
}
  