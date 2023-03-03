import Header from '../../components/header/Header'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';

function ContentPage(){
    const [id,setID] = useState();
    useEffect(() => {
        
    },[])
    return (
        <div className='container'>
            <Header />

        </div>
    )
}
export default ContentPage;