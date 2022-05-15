import Content from './Content';
import Buscador from './buscador'

import Footer from '../footer/footer';
import Introduccion from './Intro';


const Page = () => {
    return (
        <>
            <Introduccion />
            <Buscador />
            <Content />
            <Footer />
        </>
    );
}

export default Page;