import 'bootstrap/dist/css/bootstrap.css';
import BIC from '../../images/bic_logo.png';
import {Link} from 'react-router-dom';
export default function Header(){
    const date = new Date();
    const month = date.toLocaleString('default',{month: 'long'});
    const dateNum = date.toISOString().substring(8,10);
    const year = date.toISOString().substring(0,4);
    return (
        <div className='text-center'>
            <header className='py-3'>
            <div className='row flex-nowrap justify-content-between align-items-center'>
                <div className='col-4 pt-1'>
                    <a className='text-muted' href="#">Subscribe</a>
                </div>
                <div className='col-4 text-center'>
                    <Link to='/'>
                        <img src={BIC} className='img-fluid ' />
                    </Link>
                </div>
                <div className='col-4 d-flex justify-content-center align-items-center my-3'>
                    {/* <a href='#'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search mx-3" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    </a> */}
                    <Link to="/login" className='btn btn-sm  btn-outline-secondary'>Login as Pastor Eddy</Link>

                </div>
            </div>
            <hr></hr>
            <div className='row'>
                <div className='text-center '>
                    <h5>{month} {dateNum} {year}</h5>
                </div>
                {/* <div className='nav-scroller py-1 mb-2'>
                    <nav className='nav d-flex justify-content-between'>
                        <a className='p-1 text-muted' href='#'>January</a>
                        <a className='p-1 text-muted' href='#'>February</a>
                        <a className='p-1 text-muted' href='#'>March</a>
                        <a className='p-1 text-muted' href='#'>April</a>
                        <a className='p-1 text-muted' href='#'>May</a>
                        <a className='p-1 text-muted' href='#'>June</a>
                        <a className='p-1 text-muted' href='#'>July</a>
                        <a className='p-1 text-muted' href='#'>August</a>
                        <a className='p-1 text-muted' href='#'>September</a>
                        <a className='p-1 text-muted' href='#'>October</a>
                        <a className='p-1 text-muted' href='#'>November</a>
                        <a className='p-1 text-muted' href='#'>December</a>
                    </nav>
                </div> */}
            </div>
            <hr></hr>
        </header>


        </div>
        

    )
}
