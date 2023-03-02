import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/auth/login',{username,password},{
                headers:{'Content-Type' : 'application/json'},
                withCredentials:true
            })
                        .then(navigate('/adminMain'));

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if(document.cookie){
            navigate('/adminMain')
        }
    })

    return (
        <div className='container d-flex'>
            <div className='row h-100 mx-auto my-5'>
                <div className='col-12 my-6 my-auto'>

                    <form>
                        <h3>Hello </h3>
                        <div className='mb-3'>
                            <label>Username</label>
                            <input
                                type="text"
                                placeholder='Enter username'
                                className='form-control'
                                onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <label>Password</label>
                            <input
                                type="password"
                                className='form-control'
                                placeholder='Entter password'
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <div className='custom-control custom-checkbox'>
                                <input type="checkbox" className='custom-control-input' id='customCheck1' />
                                <label className='custom-control-label px-2' htmlFor='customCheck1'>Remember Me</label>
                            </div>
                        </div>
                        <div className='d-grid'>
                            <button type="submit" className='btn btn-primary col-12' onClick={handleSubmit}>Submit</button>
                        </div>
                        <div className='mt-3'>
                            <a href="#" className='text-decoration-none' >No Account ?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
