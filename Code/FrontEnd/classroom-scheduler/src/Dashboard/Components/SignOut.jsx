import  { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function SignOut() {
    let navigate=useNavigate();

    useEffect(()=>{
        let data=sessionStorage.getItem('admin');
        sessionStorage.clear(data);
        navigate('/');
    },[])
}

export default SignOut