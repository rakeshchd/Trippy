import Hero from "../components/Hero";
import HomeImg from "../assets/HeroImg.jpg"
import Destination from "../components/Destination";
import RecentTrips from "../components/RecentTrips";
import Footer from "../components/Footer";

function Home(){
    return (
        <>
        <Hero
        cName = "hero"
        heroImg = {HomeImg}
        heroImgClass = "img-full"
        title = "Your Journey Your Story"
        text = "Choose Your Favourite Destination."
        buttonText = "Plan Your Trip"
        url = "/"
        btnClass = "show"
        />
        <Destination/>
        <RecentTrips/>
        <Footer/>
        </>
    )
}

export default Home;