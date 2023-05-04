import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.scss'
import {Link} from 'react-router-dom'

const Navbar = ({setMenuOpen, menuOpen}) => {
  return (
    <div className = "navbar">
      <div className= 'wrapper'>
        <div className="left">
          <div className = 'hamburguerContainer'>
            <div className= 'hamburguer' onClick = {() =>setMenuOpen(!menuOpen)}>
              <MenuIcon />
            </div>
          </div>
          <div className="item">
            <Link to = {`/category/women`} className='link'>Women</Link>
          </div>
          <div className="item">
            <Link to = {`/category/men`} className='link'>Men</Link>
          </div>
        </div>
    
        <div className="center">
          <Link to = '/' className='link'>MIRSA</Link>
        </div>

        <div className="right">
          <div className="rightItems">
          <Link className='link' to = '/'>Homepage</Link>
          </div>
          <div className="rightItems">
            <Link className='link' to = 'https://www.whatsapp.com/'>Contact</Link>
          </div>
          <div className="icons">
            <a href='#cart' target="_blank"><CartWidget /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar