import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';

const CardItem = ({item}) => {
    const navigate = useNavigate();

    const openContent = (idx) => {
        navigate(`/read`,
        {
            state: {
                id: idx
            }
        });
    }
    return (
        <div className='col-md-6'>
            <div className='card flex-md-row mb-4 shadow-sm h-md-250' >
                <div className='card-body d-flex flex-column align-items-start text-truncate'>
                    <strong className='d-inline-block mb-2 text-primary'>{item.reading}</strong>
                    <h3 className='mb-1'>
                        <a className='text-dark text-decoration-none' href='#'>{item.title}</a>
                    </h3>
                    <div className='mb-1 text-muted'>{(item.dates)}</div>
                    <p className='card-text mb-auto'
                    style={{whiteSpace:'nowrap',maxWidth:'90%',
                    overflow:'hidden',textOverflow:'ellipsis',
                    }}>
                        {item.description}
                    </p>
                    <a href=""  onClick={() => openContent(item._id)}>Continue reading</a>
                </div>
            </div>
        </div>
    )
}
export default CardItem;