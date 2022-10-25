import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import We from './pages/ejes';
import Noticias from './pages/noticias';//
import Noticia from "./pages/noticia";
import Redes from './pages/redes';
import Contacto from './pages/contacto';
import NotFoundPage from "./pages/notFound";
import Navbar from "./components/Navbar";
import ExtendedPub from "./components/ExtendedPub";
//import NewNotice from "./pages/admin/upPub";
//import Login from "./components/Login";
import Plan from "./pages/plan"

import Footer from "./components/Footer";
export default function App(){
  return(
  <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path = '/' element={<Home />} />
        <Route path = '/home' element={<Home />} />
        <Route path = '/noticias' element={<Noticias />} />
        <Route path = '/noticia/:id' element={<ExtendedPub />} />
        <Route path = '/redes' element={<Redes />} />
        <Route path = '/contacto' element={<Contacto />} />
        <Route path = '/plan-de-gobierno' element={<Plan />} />
        <Route path = '*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );

}
