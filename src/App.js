import './App.scss';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { useState } from 'react';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import WhatsappIcon from './components/WhatsappIcon/WhatsappIcon'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import PageNotFound from './PageNotFound';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className = 'App'>
      <BrowserRouter>
        <Navbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
        <Menu menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
        <Routes>
          <Route path='/' element = {<ItemListContainer greeting = {"Welcome!"}/>}/>
          <Route path='/category/:categoryId' element = {<ItemListContainer />}/>
          <Route path='/item/:itemId' element = {<ItemDetailContainer />}/>
          <Route path='/*' element ={<PageNotFound />}/>
        </Routes>
        < WhatsappIcon /> 
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
