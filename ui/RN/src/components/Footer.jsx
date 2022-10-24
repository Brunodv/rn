import { FooterStyled, DerechosStyled, DivWtsp, DivFB, DivInst, DivSocials, PStyled,PFstyled} from "./appStyled"
import { BsFacebook, BsWhatsapp, BsInstagram, BsFillTelephoneFill } from "react-icons/Bs";

export default function Footer(){
    return( 
    <FooterStyled>
    <DerechosStyled>
    <PFstyled>© Realidad Nacional 2022</PFstyled>
    <DivSocials>
    <DivFB href='https://www.facebook.com/profile.php?id=100009684617241'>{<BsFacebook/>}</DivFB>
    <DivWtsp href="https://api.whatsapp.com/send?phone=51977631700">{<BsWhatsapp/>}</DivWtsp>
    <DivInst href="https://www.instagram.com/brunodulantovalentin/">{<BsInstagram/>}</DivInst>
    </DivSocials>
    </DerechosStyled>
    <PStyled>Av. Los Rosales 457 Urb. Cabo GC. Juan Ingunza Valdivia - Vipol Callao {<BsFillTelephoneFill/>} +51977631700 </PStyled>
    </FooterStyled>
    )
}