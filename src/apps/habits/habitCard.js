const HabitCard = ({title, description}) => {
    return (
        <div className="habit-card">
            <h3>{title}</h3>
            <p>{description}</p>

            <style jsx>{`
                .habit-card {
                    background-color: #f4f4f9;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    padding: 15px;
                    margin: 10px 0;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }

                .habit-card h3 {
                    margin: 0;
                    font-size: 18px;
                }

                .habit-card p {
                    margin: 5px 0 0;
                    color: #666;
                    font-size: 14px;
                }
      `     }</style>                        
        </div>
    );
};

export default HabitCard;