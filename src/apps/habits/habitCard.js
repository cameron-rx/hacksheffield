import './habit-card.css';

const HabitCard = ({title, description, image}) => {
    return (
        <div className="habit-card">
            <h3>{title}</h3>
            <p>{description}</p>      
            
            <img src={`${image}`}></img>                  
        </div>
    );
};

export default HabitCard;