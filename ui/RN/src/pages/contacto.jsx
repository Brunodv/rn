import { DivMapa, H5Styled, DivFB, DivWtsp , DivContacto, IframeStyled} from '../components/appStyled'
import { BsFacebook, BsWhatsapp } from "react-icons/Bs";

export default function Contacto(){
    
    return (     
    <DivMapa>
    <H5Styled>CONTÁCTO<DivContacto><DivFB href='https://www.facebook.com/profile.php?id=100009684617241'>{<BsFacebook/>}</DivFB><DivWtsp href="https://api.whatsapp.com/send?phone=51977631700">{<BsWhatsapp/>}</DivWtsp></DivContacto></H5Styled>
    <IframeStyled src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.6068615295967!2d-77.09917310777904!3d-12.008353869550081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa6f337fba01e015a!2zMTLCsDAwJzMxLjEiUyA3N8KwMDUnNTQuOSJX!5e0!3m2!1ses!2spe!4v1665528077658!5m2!1ses!2spe" 
    width="700" height="350"></IframeStyled>
    </DivMapa>

)}