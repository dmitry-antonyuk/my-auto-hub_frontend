import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero';
import Form from '../Form/Form';
import Blog from '../../../alpina-ui/src/components/Blog/Blog';
import DelivererCard from '../DelivererCard/DelivererCard';

const Layout = ({children}) => (
    <>
        <Header/>
        {/* <Hero/> */}
        {children}
        {/* <Form/> */}
        {/* <Blog/> */}
        <DelivererCard/>
        <Footer/>
    </>
);

export default Layout;