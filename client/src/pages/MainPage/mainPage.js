import Header from '../../components/header/header'
import Content from '../../components/content/content'
import 'bootstrap/dist/css/bootstrap.css';

function mainPage(){
    return (
        <div className='container'>
            <Header />
            <Content />
        </div>
    )
}
export default mainPage;