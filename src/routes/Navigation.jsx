import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import Teams from '../pages/Teams';
import Projects from '../pages/Projects';
const Navigation = () => {
    return(
        <BrowserRouter>
            <div>
                <Header />
            </div>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/teams" element={<Teams/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;
