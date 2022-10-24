import { DivNoticias } from "./appStyled";

const CryptoList =({pubs})=>{ 
    return( 
        <DivNoticias>
            {pubs != null ? ( 
                pubs.map(pub => ([
                    <ArticleNoticia key={pub._id}>
                        <NavLink to={`/noticia/${pub._id}`}>{pub.title}</NavLink>
                        <H2Styled>{pub.description}</H2Styled>
                    </ArticleNoticia>
                ]))
            ): ('no hay pubs')}
        </DivNoticias>
        
)}; 
export default CryptoList;