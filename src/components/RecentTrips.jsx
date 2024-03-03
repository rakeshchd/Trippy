import RecentTripsData from "./RecentTripsData";
import Img1 from "../assets/trip1.jpg"
import Img2 from "../assets/trip2.jpg"
import Img3 from "../assets/trip3.jpg"
import "./RecentTripsStyles.css"

function RecentTrips(){
    return (
        <div className="recenttrips">
            <h1>Recent Trips</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, vel.</p>
            
            <div className="tripcard">
                <RecentTripsData
                image = {Img1}
                heading = "Trip in Indonesia"
                description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed iusto laboriosam nemo? Numquam sed quaerat obcaecati harum, corporis, commodi deserunt facilis eveniet sunt iste aliquam quae temporibus hic neque? Dicta perspiciatis sequi laborum adipisci quas quidem corrupti aut praesentium nam."
                />

                <RecentTripsData
                image = {Img2}
                heading = "Trip in India"
                description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed iusto laboriosam nemo? Numquam sed quaerat obcaecati harum, corporis, commodi deserunt facilis eveniet sunt iste aliquam quae temporibus hic neque? Dicta perspiciatis sequi laborum adipisci quas quidem corrupti aut praesentium nam."
                />

                <RecentTripsData
                image = {Img3}
                heading = "Trip in France"
                description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed iusto laboriosam nemo? Numquam sed quaerat obcaecati harum, corporis, commodi deserunt facilis eveniet sunt iste aliquam quae temporibus hic neque? Dicta perspiciatis sequi laborum adipisci quas quidem corrupti aut praesentium nam."
                />
            </div>
        </div>
    );
}

export default RecentTrips;