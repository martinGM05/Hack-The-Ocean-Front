import Content from './Content';
import Buscador from './buscador'
import NavBar from '../layouts/navbar'
import Footer from '../footer/footer';
import Introduccion from './Intro/Intro';


const Page = () => {
    return ( 
        <>
            <div className='pb-0'>
                <NavBar />
                <Introduccion />
            </div>
            <Buscador/>
            <Content/>
            <Footer/>
        </>
     );
}
 
export default Page;