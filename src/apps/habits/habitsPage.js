import HabitCard from "./habitCard";
import './habit-page.css';

const HabitsPage = () => {
    const currentDate = new Date().toLocaleDateString(); // Format: MM/DD/YYYY

    const habits = [
        {
            id: 1,
            title: 'Exercise', description: 'Do a 30-minute workout.',
            image: 'https://images.unsplash.com/photo-1517963628607-235ccdd5476c?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 2,
            title: 'Meditate', description: 'Practice for 10 minutes.',
            image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGd5bXxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            id: 3,
            title: 'Read', description: 'Read at least 10 Pages of a book.',
            image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2202&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 1
            , title: 'Exercise', description: 'Do a 30-minute workout.',
            image: 'https://images.unsplash.com/photo-1473492201326-7c01dd2e596b?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 2,
            title: 'Meditate', description: 'Practice for 10 minutes.',
            image: 'https://images.unsplash.com/photo-1601001815894-4bb6c81416d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29va3xlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            id: 3,
            title: 'Read', description: 'Read at least 10 Pages of a book.',
            image: 'https://plus.unsplash.com/premium_photo-1661499181678-b2b6b34d8766?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29va3xlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            id: 1,
            title: 'Exercise', description: 'Do a 30-minute workout.',
            image: 'https://plus.unsplash.com/premium_photo-1702910931866-2642eee270b1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2xlZXB8ZW58MHx8MHx8fDA%3D'
        },
        {
            id: 2,
            title: 'Meditate',
            description: 'Practice for 10 minutes.',
            image: 'https://plus.unsplash.com/premium_photo-1677355760435-8c1f1d81edc5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvYmJ5fGVufDB8fDB8fHww'
        },
        {
            id: 3,
            title: 'Read',
            description: 'Read at least 10 Pages of a book.',
            image: 'https://media.istockphoto.com/id/2149408100/photo/on-a-sports-court-near-the-net-there-are-tennis-rackets-and-balls-3d-rendering.webp?a=1&b=1&s=612x612&w=0&k=20&c=PIK1tty8RKjKeRXpp2JqsU0WxzjC4ackjFqpZiIIHAA='
        },
        {
            id: 4,
            title: 'Read',
            description: 'Read at least 10 Pages of a book.',
            image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFza2V0YmFsbHxlbnwwfHwwfHx8MA%3D%3D'
        },
        // {id: 1, title: 'Exercise', description: 'Do a 30-minute workout.'},
        // {id: 2, title: 'Meditate', description: 'Practice for 10 minutes.'},
        // {id: 3, title: 'Read', description: 'Read at least 10 Pages of a book.'},
    ];

    function triggerActive(e) {
        let currentEl = e.target;
    
        // Check if the clicked element is inside a child element like 'gradient-overlay' or 'card-img-overlay'
        if (currentEl.className.includes('gradient-overlay') || currentEl.className.includes('card-img-overlay')) {
            currentEl = currentEl.closest('.card'); // Find the nearest parent with class 'card'
        }
    
        // Toggle 'active' class on the identified card element
        if (currentEl.classList.contains('active')) {
            currentEl.classList.remove('active');
        } else {
            currentEl.classList.add('active');
        }
    }


    return (
        <div className="habits-page">
        <header className="text-center text-date p-5">
            <h2>{currentDate}</h2> {/* Centered date */}
        </header>

        <div className="cards d-flex flex-wrap">
            {habits.map((habit, index) => (
                <div
                    key={index}
                    className="card position-relative m-2"
                    style={{ width: "18rem", overflow: "hidden" }}
                    onClick={triggerActive}
                >
                    <img
                        src={habit.image}
                        className="card-img"
                        alt={habit.title}
                    />
                    <div className="hover-overlay">
                        <div className="gradient-overlay"></div>
                        <div className="tick-overlay">
                            <i className="bi bi-check-circle"></i>
                        </div>
                    </div>
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                        <h5 className="card-title text-white bg-dark bg-opacity-50 p-3">
                            {habit.title}
                        </h5>
                        <p className="card-text text-white bg-dark bg-opacity-50 p-3">
                            {habit.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}


export default HabitsPage;