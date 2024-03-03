import "./RecentTripsStyles.css"

function RecentTripsData(props){
    return (
        <div className="t-card">
            <div className="t-img">
                <img src={props.image} alt="image" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.description}</p>
        </div>
    );
}

export default RecentTripsData;