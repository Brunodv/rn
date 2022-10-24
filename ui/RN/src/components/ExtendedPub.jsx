import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { singlePub } from '../actions/pubActions';
import { Htitle, H4Styled, H7Styled,DivNoticia } from './appStyled';

const ExtendedPub = () =>{
        const [pub,setPub]=useState(null)

        const params = useParams()
        useEffect(()=>{
            singlePub(params.id, setPub)
        },[])
        return (
            <> 
            {pub!=null ? ( 
            <DivNoticia>
            <H7Styled>{pub.title}</H7Styled>
            <H7Styled>{pub.description}</H7Styled>
            <H7Styled>{pub.descriptionExtended}</H7Styled>
            </DivNoticia>
            
        ):('no hay noticia')}

        </>
        )    
} 

    export default ExtendedPub
