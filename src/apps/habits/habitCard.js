import './habit-card.css';

const HabitCard = ({title, description}) => {
    return (
        <div className="habit-card">
            <h3>{title}</h3>
            <p>{description}</p>                        
        </div>
    );
};

export default HabitCard;