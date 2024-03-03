import "./DestinationStyles.css"

function DestinationData(props){
    return (
        <>
            <div className={props.desClassName}>
                <div className="des-text">
                    <h2>{props.heading}</h2>
                    <p>{props.description}</p>
                </div>
                <div className="des-img">
                    <img src={props.img1} alt="image-1" />
                    <img src={props.img2} alt="image-2" />
                </div>
            </div>
        </>
    );
}

export default DestinationData;