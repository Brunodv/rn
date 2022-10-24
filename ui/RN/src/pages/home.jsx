import { LinkStyled, LinkStyled2, H1Styled, SpanStyled, SectionStyled, H2Styled,
         H4Styled, DivLinks, DivRoy, AStyled2, NovedadesStyled, RedesStyled } from "../components/appStyled";
import { Link } from 'react-router-dom';
import  We  from './ejes'
import Redes from './redes'
import LastNoticias from "./lastNoticias";
//import Novedades from './novedades'

export default function Home(){
    return <SectionStyled>
    <H2Styled>BIENVENIDO A</H2Styled>
    <H1Styled>REALIDAD <SpanStyled>NACIONAL</SpanStyled></H1Styled>
    <DivLinks>
    <AStyled2 href="https://drive.google.com/file/d/1A_vBLs_pvZF0U2yr7TfkfgRBZOIf5wP9/view?usp=sharing">IDEARIO</AStyled2>
        <LinkStyled2  to="/plan-de-gobierno">PLAN DE GOBIERNO</LinkStyled2>
    </DivLinks>
        <DivRoy>
        <We /> 
        </DivRoy>

        <NovedadesStyled>       
        <H4Styled>Actualizaciónes</H4Styled>        
        <LastNoticias />
        </NovedadesStyled>     

        <RedesStyled>
        <H4Styled>Siguenos en Nuestras Redes Sociales</H4Styled>        
        <Redes />
        </RedesStyled>

    </SectionStyled>;
    
  
}