import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import './style.css';
import {useNavigate} from 'react-router-dom';
const AdminCardItem = ({ item }) => {
    const navigate = useNavigate();

    const deletePost = async (id) => {
        try{
            await axios.delete(`/reads/${id}`)
            .then(() => {
                alert(id + "is successfully deleted");
            });
            window.location.reload(false);
        }catch(err){
            console.log(err);
        }
    }

    const editPost = async (idx) => {
        try{
            navigate('/adminEdit',{
                state: {
                    id: idx
                }
            });
        }catch(err){
            console.log(err);
        }
    }

    return (
        
        <div className='col-md-6'>
            <div className='card flex-md-row mb-4 shadow-sm h-md-250'>
                <div className='card-body d-flex flex-column align-items-start text-truncate'> 
                    <div className='position-absolute mx-2 mt-3 top-0 end-0'>
                        <button className='btn btn-outline-dark btn-sm mx-2'
                        onClick={()=>{
                            editPost(item._id)
                        }}>Edit</button>
                        <button className='btn btn-outline-dark btn-sm mx-1' 
                        onClick={()=>{
                            deletePost(item._id)
                        }}
                        >Delete</button>
                    </div>

                    <strong className='d-inline-flex mb-2 text-primary' style={{whitespace:"normal"}}
                    >{item.reading}</strong>
                    <h3 className='mb-1'>
                        <a className='text-dark text-decoration-none' href='#'>{item.title}</a>
                    </h3>
                    <div className='mb-1 text-muted'>{item.dates}</div>
                    <p className='card-text mb-auto'
                    style={{whiteSpace:'nowrap',maxWidth:"90%",
                    overflow:'hidden',textOverflow:'ellipsis',
                    }}>
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default AdminCardItem;