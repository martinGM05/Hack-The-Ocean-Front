import Content from './Content';
import Buscador from './buscador'
import NavBar from '../layouts/navbar'
import Footer from '../footer/footer';


const Page = () => {
    return ( 
        <>
            <div className='pb-5'>
                <NavBar />
            </div>
            <Buscador/>
            <Content/>
            <Footer/>
        </>
     );
}
 
export default Page;