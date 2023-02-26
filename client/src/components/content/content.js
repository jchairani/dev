import 'bootstrap/dist/css/bootstrap.css';
import {useEffect, useState} from 'react';
import CardItem from '../cardItem/CardItem';
import axios from 'axios';
import { formatDate } from '../../utils/dateFormat';
export default function Content(){

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
        console.log(data);
    },[0])

    return (
        <div className='row mb-2 justify-content-center'>
            {data.map(item => (
                <CardItem item={item} key={item._id} /> 
            ))}
        </div>
    )
}