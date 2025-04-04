import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import Teams from '../pages/Teams';
import Projects from '../pages/Projects';
import '../styles/home.css'
import Footer from '../components/Footer';
const Navigation = () => {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/teams" element={<Teams/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Navigation;
