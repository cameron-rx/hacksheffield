import { FirstStatisticalComponent } from "./first-statistical-component";
import { SecondStatisticalComponent } from "./second-statistical-component";
import './statistics-component.css';

export function StatisticsComponent() {
    return (
        <div className="row statistics-row">
            <div className="statistics-card col-md-6 text-white d-flex justify-content-center align-items-center py-4">
                <FirstStatisticalComponent/>
            </div>
            <div className="statistics-card col-md-6 text-white d-flex justify-content-center align-items-center py-4">
                <SecondStatisticalComponent/>
            </div>
        </div>
    );
}
