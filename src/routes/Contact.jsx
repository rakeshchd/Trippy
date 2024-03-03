import Hero from "../components/Hero";
import ContactImg from "../assets/ContactImg.jpg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact(){
    return (
        <>
        <Hero
        cName = "hero-next"
        heroImg = {ContactImg}
        heroImgClass = "img-half"
        title = "Contact us"
        btnClass = "hide"
        />
        <ContactForm/>
        <Footer/>
        </>
    )
}

export default Contact;