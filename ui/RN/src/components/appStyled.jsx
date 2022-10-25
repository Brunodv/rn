import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
background:rgb(2,36,59);
width:100%;
display: flex;
align-content: center;
justify-content: space-between;
padding:14px 0px 14px 0px;
box-shadow: 1px 1px 1px rgb(164,170,186);

@media (max-width: 768px) {
    display:grid;
    grid-template-columns: repeat(1, 1fr);
    text-align:center;
    align-items:center;
  }
@media (max-width: 320px) {
    width:320px;
}
@media (max-width: 284px) {
    width:284px;
}
@media (max-width: 280px) {
    width:280px;

}
@media (max-width: 250px) {
    margin:0px auto;
    font-size:14px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-content: center;
    padding: 0px auto;
    width:250px;
}

@media (max-width: 200px) {
    width: 200px;
  }
@media (max-width: 150px) {
    width:150px;
}
`
export const DivStyled7=styled.div`
@media (max-width: 280px) {
    width:280px;
    text-align:center;
    padding-left:0px;
    align-items:center;
    justify-content: center;

}
@media (max-width: 250px) {
    width:250px;
}
@media (max-width: 200px) {
    width:200px;
}
@media (max-width: 150px) {
    width:150px;
}
`
export const NavStyled=styled.nav`
@media (max-width: 768px) {
    font-size:14px;
    text-align:center;
    padding-left:0px;
    align-items:center;
}
@media (max-width: 280px) {
    width:280px;
}
@media (max-width: 250px) {
    width:250px;
}
@media (max-width: 200px) {
    width:200px;
}
@media (max-width: 150px) {
    width:150px;
}
`
export const UlStyled=styled.ul`

display:flex;
text-align: center;
list-style-type: none;
@media (max-width: 720px) {
    justify-content: center;
}
@media (max-width: 465px) {
    justify-content: center;
    padding-left:0;
    font-size:10px;
}
@media (max-width: 320px) {
    width:320px;
    font-size:8px;
    padding-left:0;
}
@media (max-width: 284px) {
    width:284px;
    padding-left:0;
    font-size:8px;
    display:flex;
    justify-content: center;
}
@media (max-width: 280px) {
    width:280px;
    padding-left:0;
    font-size:8px;
    display:flex;
    justify-content: center;
}

@media (max-width: 250px) {
    width:250px;
    padding-left:0px;
    margin:0px;
    font-size:7px;
}
@media (max-width: 250px) {
    width:250px;
    padding-left:0px;
    margin:0px;
    font-size:7px;
}

@media (max-width: 200px) {
    width:200px;
}
@media (max-width: 150px) {
    width:150px;
    flex-direction:column;
    font-size:14px;
}
`
export const ImgStyled=styled.img`
width: 230px;
max-height: 130px;
@media (max-width: 200px) {
    width:180px;
}
@media (max-width: 150px) {
    width:150px;
}
`
export const LiStyled=styled.li`
padding: 10px;
text-decoration: none;
font-family: "Montserrat", sans-serif;
font-weight: 600;
line-height: 50px;
@media (max-width: 150px) {
    height:20px;
  }
`

export const H1Styled = styled.h1`
font-size: 50px;
margin-bottom: 30px;
color:#fff;
@media (max-width: 284px) {
    font-size:35px;
}
@media (max-width: 280px) {
    font-size:30px;
}

@media (max-width: 250px) {
    font-size:30px;
}
@media (max-width: 150px) {
    font-size: 14px;
  }
`
export const H2Styled = styled.h2`
font-size: 16px;
font-weight: 600;
color:#fff;
text-align: center;
@media (max-width: 284px) {
    font-size: 20px;
}
@media (max-width: 150px) {
    font-size: 14px;
}
`
export const SpanStyled = styled.span`
color: rgb(248, 8, 8);

`
export const SectionStyled = styled.section`
    margin-top: 133px;
    text-align: center;
    
`
export const DivLinks=styled.div`
@media (max-width: 465px) {
    display:grid;
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
}

`
export const LinkStyled=styled(Link)`

    margin-right: 40px;
    padding: 10px 30px;
    background-color: rgb(248, 8, 8);
    color: #fff;
    border-radius: 5px;
    text-decoration:none;

&:hover{
    background-color:#fff;
    color: rgb(248, 8, 8);
    transition: .5s;
}
@media (max-width: 465px) {
    width:70%;
    margin:0px auto;
    margin-bottom:20px;
  }

`
export const LinkStyled2=styled(Link)`

    margin-right: 40px;
    padding: 10px 30px;
    color: rgb(248, 8, 8);
    background-color: #fff;
    border-radius: 5px;
    text-decoration:none;

&:hover{
    color: #fff;
    background-color: rgb(248, 8, 8);
    transition: .5s;
}
@media (max-width: 465px) {
    width:70%;
    margin:0px auto;
  }
@media (max-width: 150px) {
    font-size:10px;
    width:50%;
  }
`

//for ideario

export const SectionIdeario = styled.section`
    margin-top:10px;
    height:100vh;
    @media (max-width: 360px) {
        width:100%;
        margin:0px auto;
      }
    @media (max-width: 320px) {
        width:100%;
        margin:0px auto;
      }
`
export const SectionEjes = styled.section`
    margin-top:10px;
    @media (max-width: 150px) {
        width:150px;
      }
  
`
export const IconDiv = styled.div`
    width:200px;
    margin:0 auto;
    padding-bottom:70px;
    align-items:center;
    text-align: center;
    border-radius:20px;
    svg{
        fill:white; 
        font-size:70px;
    }
   
    &:hover{
        svg{
            transform:scale(1.3);
            fill:rgb(46,41,74);
            transition: all 1s;
           
        }
    }

    @media (max-width: 465px) {
        svg{
            font-size:70px;
      }
    }

    @media (max-width: 150px) {
        width:150px;
      }
   
`
export const H3Styled = styled.h2`
color: #fff;
text-align: center;
font-size:1.5rem;
&:hover{
    transform:scale(1.3);
    color:rgb(46,41,74);
    transition: all 1s; 
}
@media (max-width: 768px) {
    font-size:20px;
  }
@media (max-width: 150px) {
    font-size:14px;
  }
`
export const PStyled = styled.p`
color:#fff;
font-size:14px;
`
/*para posible parrafo en ejes
export const PStyled = styled.p`
color: #fff;
text-align: center;
&:hover{
    color: #fff
    transition: .5s;
}
*/
export const FilaStyled = styled.div`
display:grid;
grid-template-columns: repeat(3, 1fr);
@media (max-width: 1024px) {
    display:grid;
    grid-template-columns: repeat(2, 1fr);
  }
 @media (max-width: 465px) {
    width:100%;
    display:grid;
    grid-template-columns: repeat(1, 1fr)
}
@media (max-width: 150px) {
    width:150px;
  }

`
/*noticias*/
export const DivNoticias = styled.div`
text-align:center;
height:335px;
padding-top:80px;
`
export const ArticleNoticia=styled.article`
border:1px solid rgb(167,199,231);
width:55%;
margin:0 auto;
@media (max-width: 1024px) {
    width:80%;
margin:0 auto;
  }
`
/*div Roy*/
export const DivRoy = styled.div`
margin-top: 200px;
`
/*redes*/
export const DivRedes = styled.div`
display:flex;
margin:70px;
justify-content:space-between;
@media (max-width: 1024px) {
    flex-direction: column;
    text-align:center;
    align-items:center;
  }
@media (max-width: 200px) {
    flex-direction: column;
    text-align:center;
    align-items:center;
  }
`
export const DivRed1 = styled.div`
width:328px;
height:500px;
@media (max-width: 284px) {
    width:284px;
}
@media (max-width: 280px) {
    width:280px;
}
@media (max-width: 250px) {
    width:250px;
    heigh:500px;
  }
@media (max-width: 200px) {
    width:200px;
    heigh:500px;
  }
@media (max-width: 150px) {
    width:150px;
    heigh:500px;
  }
`
export const RedesStyled = styled.div`
margin-top: 250px;
margin-bottom:200px;

`
export const H4Styled = styled.h1`
font-size: 33px;
margin-bottom: 33px;
color:#fff;

@media (max-width:280px) {
    font-size:20px;
  }
@media (max-width: 200px) {
    font-size: 14px;
  }
`

/*Mapa*/

export const DivMapa = styled.div`
text-align:center;
margin:10px;
`
export const IframeStyled=styled.iframe`
width: 600px;
@media (max-width: 768px) {
    width: 400px;
  }
@media (max-width: 384px) {
    width: 70%;
}
@media (max-width: 360px) {
    width: 70%;
}
@media (max-width: 320px) {
    width: 70%;
}


`
export const H5Styled = styled.div`
font-size: 50px;
color:#fff;
@media (max-width:284px) {
    font-size:20px;
  }
@media (max-width:280px) {
    font-size:20px;
  }
@media (max-width: 200px) {
    font-size: 14px;
  }
`
export const DivFB = styled.a`
color:rgb(14,140,241);
padding:10px;
cursor:pointer;
vertical-align:middle;
font-size:50px;

&:hover{
    transform:scale(1.3);
    color:rgb(46,41,74);
    transition: all 1s; 
}
@media (max-width: 768px) {
    font-size:30px;
}
`
export const DivWtsp = styled.a`
color:rgb(0,168,132);
cursor:pointer;
padding:10px;
vertical-align:middle;
font-size:50px;
&:hover{
    transform:scale(1.3);
    color:rgb(0,92,75);
    transition: all 1s; 
}
@media (max-width: 768px) {
    font-size:30px;
}
`
export const DivInst = styled.a`
color: rgb(214,32,114);
cursor:pointer;
padding:10px;
vertical-align:middle;
font-size:50px;
&:hover{
    transform:scale(1.3);
    color:rgb(169,9,231);
    transition: all 1s; 
}
@media (max-width: 768px) {
    font-size:30px;
}
`
export const DivContacto = styled.div`
display:flex;
justify-content: center;
vertical-align:middle;

width:50%;
margin: 0 auto;
`
/*unete*/
export const AStyled=styled.a`
text-decoration:none;
color:#fff
`
export const AStyled2=styled.a`
margin-right: 40px;
padding: 10px 30px;
background-color: rgb(248, 8, 8);
color: #fff;
border-radius: 5px;
text-decoration:none;

&:hover{
background-color:#fff;
color: red;
transition: .5s;
}
@media (max-width: 465px) {
width:70%;
margin:0px auto;
margin-bottom:20px;
}
@media (max-width: 150px) {
    font-size:10px;
    width:50%;
  }

`
/*novedades*/
export const NovedadesStyled=styled.div`
margin-top: 200px;
`
/*footer*/
export const FooterStyled=styled.footer`
width:100%;
height:100px;
align-items: center;
justify-content: space-between;
display:flex;
background:rgb(34,34,34);
left:0px;
bottom:0px;
@media (max-width: 1050px) {
    display:block;
    text-align:center;
    height:150px;
   

@media (max-width: 780px) {
    height:150px;
}
@media (max-width: 360px) {
    height:150px;
}
@media (max-width: 320px) {
    height:150px;
}
@media (max-width: 250px) {
    height:210px;
    width:250px;
}
@media (max-width: 200px) {
    height:210px;
    width:100%;
}
@media (max-width: 150px) {
    height:230px;
    width:150px;
}

`
export const DerechosStyled=styled.div`
text-decoration: none;
font-family: "Montserrat", sans-serif;
font-weight: 600;
color:#fff;
display:flex;
align-items:center;
@media (max-width:1050px) {
    display:flex;
    flex-direction:column;
}
@media (max-width:768px) {
    display:flex;
    flex-direction:column;
}
`
export const PFstyled = styled.p`
@media (max-width: 360px) {
    font-size:15px;
}
@media (max-width: 320px) {
    font-size:13px;
}
`
export const DivSocials = styled.div`

`
export const DivNoticia = styled.div`
padding-top:80px;
height:335px;
`
export const Htitle=styled.div`
color:#fff;
text-align:center;
font-size:33px;
font-family: "Montserrat", sans-serif;
margin:20px;
@media (max-width: 465px) {
    font-size:14px;
}
@media (max-width: 360px) {
    font-size:10px;
}

`
export const H7Styled=styled.div`
color:#fff;
text-align:center;
font-size:14;
margin:20px;
@media (max-width: 465px) {
    font-size:14px;
}
@media (max-width: 360px) {
    font-size:10px;
}
@media (max-width: 320px) {
    font-size:10px;
}
`
export const PlanStyled=styled.div`
display:flex;
text-align:center;
justify-content: center;
align-items: center;    
width:100%;
height:393px;
@media (max-width: 250px) {
    width:250px;
}
@media (max-width: 200px) {
    width:200px;
}
@media (max-width: 150px) {
    height:500px;
    width:150px;
}
`
export const Gobierno=styled.h1`
font-size:33px;
color:#fff;
@media (max-width: 250px) {
font-size:14px;
}

`