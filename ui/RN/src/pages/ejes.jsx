import { MdOutlineLocalPolice } from "react-icons/md";
import { FaHandshake, FaEquals, FaTools} from "react-icons/fa";
import { IoMdMedal, IoMdFingerPrint } from "react-icons/io";
import { Ejes } from "../components/Ejes";
import { SectionEjes, FilaStyled } from "../components/appStyled";

export default function We(){
    return(
        <SectionEjes>   
            <FilaStyled>
                <Ejes
                    icon={<MdOutlineLocalPolice/>}
                    title='Integridad'/>
                <Ejes
                    icon={<FaEquals/>}
                    title='Igualdad de Oportunidades'/>
                <Ejes
                    icon={<FaHandshake/>}
                    title='Diálogo y reconciliación'/>
        
                <Ejes
                    icon={<FaTools/>}
                    title='Sostenibilidad'/>
                
                
                <Ejes
                    icon={<IoMdMedal/>}
                    title='Integración y competitividad'/>
                <Ejes
                    icon={<IoMdFingerPrint/>}
                    title='Identidad y diversidad.'/>
           </FilaStyled>
        </SectionEjes>
    );
}