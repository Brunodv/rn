import { H3Styled } from "./appStyled";
import { IconDiv } from "./appStyled";

export function Ejes(props){
    return( 
        <IconDiv>
        {props.icon}
        <H3Styled>{props.title}</H3Styled>
        </IconDiv>
    );
}