import { Herosec } from "../Homesections/Herosec"
import { Offersec } from "../Homesections/Offersec"
import { Portfoliosec } from "../Homesections/Portfoliosec"
import { Servicesec } from "../Homesections/Servicesec"
import { Slider1 } from "../Homesections/Slider1"
import { Videosec } from "../Homesections/Videosec"
import { Testimonial } from "../Homesections/testimonial"


export const Home = ()=>{
    return(
        <>
        <Herosec/>
        <Videosec/>
        <Servicesec/>
        <Slider1/>
        <Portfoliosec/>
        <Offersec/>
        <Testimonial/>
        </>
    )
}