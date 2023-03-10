import 'bootstrap/dist/css/bootstrap.css';
import {useEffect, useState} from 'react';
import AdminCardItem from '../adminCardItem/AdminCardItem';
import axios from 'axios';
export default function AdminContent(){

    const [data,setData] = useState([]);

    const fetchData = async() => {
        try{
            await axios.get(`/reads`).then(res=>setData(res.data));
        }catch(err){
            console.log("Error");
        }
    }

    useEffect(() => {
        fetchData();
    },[])

    return (
        <div className='row mb-2 justify-content-center'>

            {data.map(item => (
                <AdminCardItem item={item} key={item._id} /> 
            ))}
        </div>
    )
}