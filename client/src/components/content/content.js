import 'bootstrap/dist/css/bootstrap.css';
import {useEffect, useState} from 'react';
import CardItem from '../cardItem/CardItem';
import axios from 'axios';
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
            

            {/* <div className='col-md-6'>
                <div className='card flex-md-row mb-4 shadow-sm h-md-250'>
                    <div className='card-body d-flex flex-column align-items-start'>
                        <strong className='d-inline-block mb-2 text-primary'>Mat 15:17</strong>
                        <h3 className='mb-1'>
                            <a className='text-dark text-decoration-none' href='#'>David and Goliath</a>
                        </h3>
                        <div className='mb-1 text-muted'>Feb 17th</div>
                        <p className='card-text mb-auto'>
                            "Meanwhile David used his catapault to throw Goliath off his feet to the ground"
                        </p>
                        <a href="#">Continue reading</a>
                    </div>
                </div>
            </div> */}
            {/* <div className='col-md-6'>
                <div className='card flex-md-row mb-4 shadow-sm h-md-250'>
                    <div className='card-body d-flex flex-column align-items-start'>
                        <strong className='d-inline-block mb-2 text-primary'>Mat 15:17</strong>
                        <h3 className='mb-1'>
                            <a className='text-dark text-decoration-none' href='#'>David and Goliath</a>
                        </h3>
                        <div className='mb-1 text-muted'>Feb 17th</div>
                        <p className='card-text mb-auto'>
                            "Meanwhile David used his catapault to throw Goliath off his feet to the ground"
                        </p>
                        <a href="#">Continue reading</a>
                    </div>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='card flex-md-row mb-4 shadow-sm h-md-250'>
                    <div className='card-body d-flex flex-column align-items-start'>
                        <strong className='d-inline-block mb-2 text-primary'>Mat 15:17</strong>
                        <h3 className='mb-1'>
                            <a className='text-dark text-decoration-none' href='#'>David and Goliath</a>
                        </h3>
                        <div className='mb-1 text-muted'>Feb 17th</div>
                        <p className='card-text mb-auto'>
                            "Meanwhile David used his catapault to throw Goliath off his feet to the ground"
                        </p>
                        <a href="#">Continue reading</a>
                    </div>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='card flex-md-row mb-4 shadow-sm h-md-250'>
                    <div className='card-body d-flex flex-column align-items-start'>
                        <strong className='d-inline-block mb-2 text-primary'>Mat 15:17</strong>
                        <h3 className='mb-1'>
                            <a className='text-dark text-decoration-none' href='#'>David and Goliath</a>
                        </h3>
                        <div className='mb-1 text-muted'>Feb 17th</div>
                        <p className='card-text mb-auto'>
                            "Meanwhile David used his catapault to throw Goliath off his feet to the ground"
                        </p>
                        <a href="#">Continue reading</a>
                    </div>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='card flex-md-row mb-4 shadow-sm h-md-250'>
                    <div className='card-body d-flex flex-column align-items-start'>
                        <strong className='d-inline-block mb-2 text-primary'>Mat 15:17</strong>
                        <h3 className='mb-1'>
                            <a className='text-dark text-decoration-none' href='#'>David and Goliath</a>
                        </h3>
                        <div className='mb-1 text-muted'>Feb 17th</div>
                        <p className='card-text mb-auto'>
                            "Meanwhile David used his catapault to throw Goliath off his feet to the ground"
                        </p>
                        <a href="#">Continue reading</a>
                    </div>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='card flex-md-row mb-4 shadow-sm h-md-250'>
                    <div className='card-body d-flex flex-column align-items-start'>
                        <strong className='d-inline-block mb-2 text-primary'>Mat 15:17</strong>
                        <h3 className='mb-1'>
                            <a className='text-dark text-decoration-none' href='#'>David and Goliath</a>
                        </h3>
                        <div className='mb-1 text-muted'>Feb 17th</div>
                        <p className='card-text mb-auto'>
                            "Meanwhile David used his catapault to throw Goliath off his feet to the ground"
                        </p>
                        <a href="#">Continue reading</a>
                    </div>
                </div>
            </div> */}
        </div>
    )
}