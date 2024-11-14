import CarouselContainer from "../components/CarouselContainer"
import ServicesCardContainer from "../components/ServicesCardContainer"
import WhyUsSection from "../components/WhyUsSection"
import Partners from "../components/Partners"
import Contact from "../components/Contact"
import Footer from "../components/Footer"


export default function Home(){

    return(
        <>
        <CarouselContainer/>
        <ServicesCardContainer/>
        <WhyUsSection/>
        <Partners/>
        <Contact/>
        <Footer/>
        </>
    )
}