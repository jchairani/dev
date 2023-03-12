import 'bootstrap/dist/css/bootstrap.css';
import AdminHeader from '../../components/adminHeader/AdminHeader';
import AdminContent from '../../components/adminContent/AdminContent';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

export default function AdminLanding(){
    const navigate = useNavigate();

    function checkCookie(){
        setTimeout(() => {
            if(!document.cookie){
                navigate('/login');
            }
        })
    }
    useEffect(()=>{
        const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
            window.location.reload(false);
          }, 61000)
        
          return () => {
            clearInterval(intervalId);
            checkCookie();
           }
    },[])
    return(
        <div className='container'>
            <AdminHeader />
            <AdminContent />            
        </div>
    )
}
