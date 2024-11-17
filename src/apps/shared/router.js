import HabitsPage from "../habits/habitsPage";
import { HomePage } from '../dashboard/home-page';
import { Routes, Route } from 'react-router-dom';


export function CurrentPageRouter() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/habits" element={<HabitsPage />} />
        </Routes>
    );
}