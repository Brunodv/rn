//import upPub from "../../actions/pubActions";
import { useState } from "react";
import axios from 'axios';

const NewNotice = () =>{
    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');
    const [descriptionExtended, setDescriptionExtended]=useState('');
    
    const SubmitPub = async(e)=>{
        e.preventDefault();
        const config = {headers:{ "Content-Type" : "application/json"}, };

        console.log({title,description,descriptionExtended});
        try{
            const resp = await axios.post("http://localhost:4000/api/v1/pub/new", {title:title, description:description, descriptionExtended:descriptionExtended},config  )
            
            console.log(resp);
        } catch(error){
            console.log(error.response)
        };
    };

    return( 
        <div>
        <form className="noticia-form" onSubmit={SubmitPub} >
            <input type="text" className="tarea-input" placeholder="Escribe el titulo" value= {title} onChange= {(e)=>setTitle(e.target.value)}/>
            <input type="text" className="tarea-input" placeholder="Escribe una descripción" value= {description} onChange= {(e)=>setDescription(e.target.value)}/>
            <input type="text" className="tarea-input" placeholder="Escribe la noticia" value= {descriptionExtended} onChange= {(e)=>setDescriptionExtended(e.target.value)}/>
            <button type='submit' className="noticia-boton">
                Agregar Notica
            </button>
        </form>
        </div>
        )
}

export default NewNotice