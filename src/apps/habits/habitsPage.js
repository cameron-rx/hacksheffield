import HabitCard from "./habitCard";
import './habit-page.css';

const HabitsPage = () => {
    const currentDate = new Date().toLocaleDateString(); // Format: MM/DD/YYYY
    const habits = [
        {id: 1, title: 'Exercise', description: 'Do a 30-minute workout.'},
        {id: 2, title: 'Meditate', description: 'Practice for 10 minutes.'},
        {id: 3, title: 'Read', description: 'Read at least 10 Pages of a book.'},
        {id: 1, title: 'Exercise', description: 'Do a 30-minute workout.'},
        {id: 2, title: 'Meditate', description: 'Practice for 10 minutes.'},
        {id: 3, title: 'Read', description: 'Read at least 10 Pages of a book.'},
        {id: 1, title: 'Exercise', description: 'Do a 30-minute workout.'},
        {id: 2, title: 'Meditate', description: 'Practice for 10 minutes.'},
        {id: 3, title: 'Read', description: 'Read at least 10 Pages of a book.'},
        // {id: 1, title: 'Exercise', description: 'Do a 30-minute workout.'},
        // {id: 2, title: 'Meditate', description: 'Practice for 10 minutes.'},
        // {id: 3, title: 'Read', description: 'Read at least 10 Pages of a book.'},
    ];


    return (
        <div className="habits-page">
             <header className="text-center text-date p-5">
                <h2>{currentDate}</h2> {/* Centered date */}
            </header>

            <div className="cards">
                {habits.map((habit) => {
                    return (
                    <div className="card">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{habit.title}</h5>
                            <p className="card-text">{habit.description}</p>
                        </div>
                    </div>
                )})}
            </div>

        </div>
    );
}


export default HabitsPage;