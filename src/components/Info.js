import phoneIcon from "../icons/smartPhone.png"
import { Image } from 'react-bootstrap';
import mailIcon from "../icons/mail.png"
import "../styles/Info.css"

export default function Info() {
    return(
        <div id="Info" >
            <div className="phone">
                <img src={phoneIcon} alt="phoneIcon"/>
                <p>+36 30 502 18 35</p>
            </div>
            <div className="email">
            <Image src={mailIcon} alt="mailIcon"/>
            <p>soselevator@gmail.com</p>
            </div>
        </div>
    )
}