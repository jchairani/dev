import 'bootstrap/dist/css/bootstrap.css';
import AdminHeader from '../../components/adminHeader/AdminHeader';
import AdminContent from '../../components/adminContent/AdminContent';

export default function AdminLanding(){
    return(
        <div className='container'>
            <AdminHeader />
            <AdminContent />            
        </div>
    )
}