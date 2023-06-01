import './App.scss';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { useState } from 'react';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';
import WhatsappIcon from './components/WhatsappIcon/WhatsappIcon'
import Cart from './components/Cart/Cart'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import PageNotFound from './PageNotFound';
import { CartProvider } from './components/context/CartContext';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className = 'App'>
      <BrowserRouter>
      <CartProvider>
        <Navbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
        <Menu menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
          <Routes>
            <Route path='/' element = {<ItemListContainer greeting = {"Welcome!"}/>}/>
            <Route path='/category/:categoryId' element = {<ItemListContainer />}/>
            <Route path='/item/:itemId' element = {<ItemDetailContainer />}/>
            <Route path='/cart' element = {<Cart />}/>
            <Route path='/checkout' element = {<Checkout />}/>
            <Route path='/*' element ={<PageNotFound />}/>
          </Routes>
        </CartProvider>
        < WhatsappIcon /> 
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
