import React from "react";
import { allPubs } from "../actions/pubActions";
import { useEffect, useState } from "react";
import { H2Styled, DivNoticias, ArticleNoticia, H3Styled } from "../components/appStyled"
import { NavLink, useParams } from "react-router-dom";
//                    <a href={`/noticia/${pub._id}`}>{pub.title}</a>
//                    <a href="/noticia">{pub.title}</a> 
//                    <a href={`http://localhost:4000/api/v1/pub/${pub._id}`}>{pub.title}</a>

const Noticias = () => {
    const[pubs,setPubs] = useState(null)
    useEffect(()=>{
        allPubs(setPubs)
    },[])
    

    return(
        <DivNoticias>
        {pubs != null ? ( 
            pubs.map(pub => ([

                <ArticleNoticia key={pub._id}>
                    <NavLink to={`/noticia/${pub._id}`}>{pub.title}</NavLink>
                    <H2Styled>{pub.description}</H2Styled>
                    <H2Styled>{pub.descriptionExtended}</H2Styled>
                </ArticleNoticia>
                
            ]))
        ): ('no hay pubs')}
        </DivNoticias>
    ) 
}
export default Noticias


/*
export default function Noticias(){

        const[pubs,setPubs] = useState(null)
    
        useEffect(()=>{
            Pubs(setPubs)
        },[])
   
    return (
       <>
       { pubs != null ? ('hay pubs') : ('no hay pubs')}
       </>
    )
    }    
*/