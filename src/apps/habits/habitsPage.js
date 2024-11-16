import HabitCard from "./habitCard";


const Habits = () => {
    const currentDate = new Date().toLocaleDateString(); // Format: MM/DD/YYYY
    const habits = [
        {id: 1, title: 'Exercise', description: 'Do a 30-minute workout.'},
        {id: 2, title: 'Meditate', description: 'Practice for 10 minutes.'},
        {id: 3, title: 'Read', description: 'Read at least 10 Pages of a book.'},
    ];


    return (
        <div className="habits-page">
            <header>
                <h2>{currentDate}</h2>
            </header>

            <section>
                {habits.map((habit) => (
                    <HabitCard key={habit.id} title={habit.title} description={habit.description} />
                ))}
            </section>

            <style jsx>{`
                .habits-page {
                    margin-left: 200px; /* Adjust based on nav bar width */
                    padding: 20px;
                }

                header h2 {
                    margin: 0 0 20px;
                    font-size: 24px;
                    color: #2c3e50;
                    
                }

                section {
                    display: flex;
                    flex-direction: column;
                }
            `}</style>
        </div>
    )
}

export default Habits;