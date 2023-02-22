import 'bootstrap/dist/css/bootstrap.css';
import AdminHeader from '../../components/adminHeader/AdminHeader';
import Content from '../../components/content/content';

export default function AdminLanding(){
    return(
        <div className='container'>
            <AdminHeader />
            <Content />            
        </div>
    )
}