import Hero from "../components/Hero";
import ServiceImg from "../assets/ServiceImg.jpg"
import Footer from "../components/Footer";
import RecentTrips from './../components/RecentTrips';

function Service(){
    return (
        <>
        <Hero
        cName = "hero-next"
        heroImg = {ServiceImg}
        heroImgClass = "img-half"
        title = "Service"
        btnClass = "hide"
        />
        <RecentTrips/>
        <Footer/>
        </>
    )
}

export default Service;
