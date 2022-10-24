import { NavLink } from "react-router-dom";
import { AStyled, HeaderStyled, ImgStyled, LiStyled, NavStyled, UlStyled, DivStyled7} from "./appStyled";
import "./navbar.css"
import image from "../media/logo7.png";
export default function Navbar() {
    return  (
        <HeaderStyled> 
      
            <DivStyled7><NavLink className={({ isActive }) => (isActive ? 'active' : 'link')} to="/home"><ImgStyled src={image} alt="cargando logo" /></NavLink></DivStyled7>
           
            <NavStyled> 
                <UlStyled>
                    <LiStyled>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'link')} to="/home">INICIO</NavLink>
                    </LiStyled>
                    <LiStyled> 
                        <AStyled href="https://docs.google.com/forms/d/e/1FAIpQLSfVUU7caXuv_A_zAGENrybRfJdeDpRL_ng1yZB5xldnKLZ1ew/viewform">UNETE</AStyled>
                    </LiStyled>
                    <LiStyled>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'link')} to="/noticias">NOTICIAS</NavLink>
                    </LiStyled>
                    <LiStyled>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'link')} to="/redes">REDES</NavLink>
                    </LiStyled>
                    <LiStyled>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'link')} to="/contacto">CONTÁCTO</NavLink>
                    </LiStyled>
                </UlStyled>
            </NavStyled> 
        </HeaderStyled>       
    )
}