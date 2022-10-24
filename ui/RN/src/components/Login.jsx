import { useRef, useState, useEffect} from 'react';
import axios from 'axios';

const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SubmitUser = async(e)=>{
        e.preventDefault();
        try{
            
            const config = {headers:{ "Content-Type" : "application/json"} };
            const resp = await axios.post("http://localhost:4000/api/v1/login", {email:email,password:password},config )
           /* let token = (resp.data.token)
            console.log(token)
            sessionStorage.setItem('token',token)*/

        } catch(error){
            console.log(error.response)
        };
        
    };

return (
    <>
    <section>  
        <h1>Sign In</h1>
        <form onSubmit={SubmitUser}>
            <label htmlFor="email">Email</label>
            <input 
            type="text"
            id="email"
            autoComplete="off"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            required
             />
             <label htmlFor="password">Password</label>
            <input 
                type="password"
                id="password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                required
             />
             <button>Sign In</button>
             <button>Logout</button>
        </form>
    </section>
</>
)
}

export default Login


/*login service*/
/*
const Login = () =>{
    const userRef=useRef();
    const errRef=useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg]=useState('');
    const [success, setSuccess]=useState('');
    
    useEffect(()=>{
        userRef.current.focus();
    },[])
    useEffect(()=>{
        setErrMsg('');
    },[user,pwd])

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try{
            const response = await axios.post()
            setUser('');
            setPwd('');
            setSuccess(true);
        }catch(err){

        }





       
    }
    
    return (
        <>
            { success? ( 
                <section>
                    <h1>Bienvenido!</h1>
                    <br />
                    <p>
                        <a href="#">Ir a Inicio</a>
                    </p>
                </section>
            ):( 
        <section>  
            <p ref={errRef} className={errMsg ? "errmsg" : 
            "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e)=>setUser(e.target.value)}
                value={user}
                required
                 />
                 <label htmlFor="password">Username</label>
                <input 
                    type="password"
                    id="password"
                    ref={userRef}
                    onChange={(e)=>setPwd(e.target.value)}
                    value={user}
                    required
                 />
                 <button>Sign In</button>
            </form>
        </section>
        )}
    </>
    )
}

export default Login*/