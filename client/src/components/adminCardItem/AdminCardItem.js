import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
const AdminCardItem = ({ item }) => {

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

    return (
        <div className='col-md-6'>
            <div className='card flex-md-row mb-4 shadow-sm h-md-250'>
                <div className='card-body d-inline-flex flex-column'>
                    <div className='position-absolute mx-2 mt-3 top-0 end-0'>
                        <button className='btn btn-outline-dark btn-sm'>Edit</button>
                        <button className='btn btn-outline-dark btn-sm' 
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
                    <p className='card-text mb-auto'>
                        {item.description}
                    </p>
                    <a href="#">Continue reading</a>
                </div>
            </div>
        </div>
    )
}
export default AdminCardItem;