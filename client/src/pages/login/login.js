import 'bootstrap/dist/css/bootstrap.css';

export default function login(){
    return (
        <div className='container d-flex'>
            <div className='row h-100 mx-auto my-5'>
                <div className='col-12 py-4 my-auto'>
                <form>
            <h3>Hello, Eddy</h3>
            <div className='mb-3'>
                <label>Username</label>
                <input
                type="email" placeholder='Enter username' className='form-control' /> 
            </div>
            <div className='mb-3'>
                <label>Password</label>
                <input 
                type="password" className='form-control' placeholder='Entter password' />
            </div>
            <div className='mb-3'>
                <div className='custom-control custom-checkbox'>
                    <input type="checkbox" className='custom-control-input' id='customCheck1' />
                    <label className='custom-control-label px-2' htmlFor='customCheck1'>Remember Me</label>
                </div>
            </div>
            <div className='d-grid'>
                <button type="submit" className='btn btn-primary'>Submit</button>
            </div>
        </form>
                </div>
            </div>
        </div>
    )
}
