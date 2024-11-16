import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { StatisticsComponent } from "../dashboard/statistics";
import { HomePage } from '../home/home-page'
import Habits from '../habits/habitsPage';

export function MyRouter() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<StatisticsComponent />} />
        <Route path="/habits" element={<Habits />} />
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
              <Link to="/dashboard">Statistics</Link>
            </li>

            <li>
              <Link to="/habits">Habits</Link>
            </li>
        </ul>
        </nav>
    );
}
  