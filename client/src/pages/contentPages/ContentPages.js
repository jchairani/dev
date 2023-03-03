import Header from '../../components/header/Header'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import axios from 'axios';


function ContentPage() {
    const location = useLocation();
    const id = location.state.id;
    const [data, setData] = useState();
    const fetchData = async (idx) => {
        try {
            await axios.get(`/reads/${idx}`)
                .then(res => {
                    setData(res.data);
                });
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData(id);
        console.log(id);

    }, [])

    return (
        <div className='container'>
            <Header />
            <header className='jumbotron mt-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8 col-md-10 mx-auto text-center'>
                            <h2 className='font-weight-bold display-3'>{data && data.title}</h2>
                            <h4 className='mt-2'>{data && data.reading}</h4>
                            <p className='mt-3'>{data && data.dates}</p>
                            <p className='mt-3 mb-4 font-weight-normal fs-5 lh-3'>
                                {data && data.description}
                            </p>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
            </header>
        </div>
    )
}
export default ContentPage;