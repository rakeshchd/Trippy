import "./HeroStyles.css"

function Hero(props){
    return (
        <>
            <div className={props.cName}>
                <img src={props.heroImg} alt="HeroImg" className={props.heroImgClass} />
                <div className="hero-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
                </div>
            </div>
        </>
    );
}

export default Hero;