import Header from '../../components/header/Header'
import Content from '../../components/content/Content'
import 'bootstrap/dist/css/bootstrap.css';

function MainPage(){
    return (
        <div className='container'>
            <Header />
            <Content />
        </div>
    )
}
export default MainPage;
