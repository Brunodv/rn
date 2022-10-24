import axios from 'axios';

const loginAction = async(state)=>{
    
    const config = {headers:{"Content-Type":"application/json"} };
    const {data} = await axios.post(
        "http://localhost:4000/api/v1/login",
        {email:email,password:password,withCredentials: true},config);
        
    return(data)
}
export default loginAction
