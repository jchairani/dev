import Header from '../../components/header/Header'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom'
import axios from 'axios';
function ContentPage(){
    const location = useLocation();
    let id = location.state.id;
    const [data,setData] = useState();
    const fetchData = async (idx) => {
        try{
            await axios.get(`/reads/${idx}`)
            .then(res => {
                setData(res.data);
            });
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {  
        fetchData(id);
        
    })

    return (
        <div className='container'>
            <Header />
            <p>{data.reading}</p>
            <p>{data.title}</p>
            <p>{data.dates}</p>
            <p>{data.description}</p>
        </div>
    )
}
export default ContentPage;