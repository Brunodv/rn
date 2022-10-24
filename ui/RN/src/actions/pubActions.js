import axios from 'axios';

const allPubs = async(state)=>{
    const peticion = await axios.get("http://localhost:4000/api/v1/pubs");
    let arr = peticion.data.pubs.docs
    arr.reverse()
    state(peticion.data.pubs.docs)
}


const singlePub = async(id,state)=>{
    const peticion = await axios.get(`http://localhost:4000/api/v1/pub/${id}`)
    state(peticion.data.pub)
    console.log({peticion})

}
/*
const upPub = async(state, title, description, descriptionExtended )=>{
    const peticion = await axios.get("http://localhost:4000/api/v1/pub/new");
    console.log({peticion})
    state(peticion.data.pubs.docs)
}*/

export {
    allPubs, singlePub//upPub
}