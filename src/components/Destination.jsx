import Image1 from "../assets/1.jpg"
import Image2 from "../assets/2.jpg"
import DestinationData from "./DestinationData";
import Image3 from "../assets/3.jpg"
import Image4 from "../assets/4.jpg"
import "./DestinationStyles.css"

function Destination(){
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nobis quo unde.</p>

            <DestinationData
            desClassName = "first-des"
            heading = "Taal Volcano, Batangas"
            description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ratione repudiandae, nulla dicta consequuntur vel commodi blanditiis dolores possimus aliquam impedit exercitationem perferendis iste repellendus perspiciatis harum et reiciendis atque saepe laudantium reprehenderit culpa delectus. Error, totam, quidem provident modi doloribus alias non assumenda hic quisquam dolorum quas eos nesciunt odio vitae accusantium harum quos et quae tempore officiis minus? Voluptates quia sit minima quam sunt? Aspernatur nobis magnam dolor?"
            img1 = {Image1}
            img2 = {Image2}
            />

            <DestinationData
            desClassName = "first-des-reverse"
            heading = "Mount Abu, Rajasthan"
            description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt reiciendis beatae sapiente doloribus itaque ipsum ad, eveniet necessitatibus at iste omnis rem quod explicabo autem, laudantium incidunt veritatis rerum illo animi sint aspernatur neque cumque commodi hic. Itaque ut eligendi veritatis minus nostrum aut cupiditate inventore soluta eos corporis. Quae adipisci nobis quisquam porro laboriosam quos dolorem labore doloribus velit, autem minus. Quos magnam quidem nobis officia perferendis eligendi dolores nobis magnam dolor!"
            img1 = {Image3}
            img2 = {Image4}
            />
        </div>
    );
}

export default Destination;