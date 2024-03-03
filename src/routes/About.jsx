import Hero from "../components/Hero";
import AboutImg from "../assets/AboutImg.jpg"
import Footer from './../components/Footer';
import Aboutus from "../components/Aboutus";

function About(){
    return (
        <>
        <Hero
        cName = "hero-next"
        heroImg = {AboutImg}
        heroImgClass = "img-half"
        title = "About us"
        btnClass = "hide"
        />
        <Aboutus/>
        <Footer/>
        </>
    )
}

export default About;