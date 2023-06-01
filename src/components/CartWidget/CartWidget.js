import { useContext } from 'react';
import './CartWidget.scss'
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const {cart, getQuantity} = useContext(CartContext)

  return cart.length > 0 ? (
    <Link to = "/cart" className="cartIcon">
         <ShoppingCartOutlinedIcon style={{textDecoration: 'none', color: 'black'}}/>
         <span>{getQuantity()}</span>
    </Link>
  ) : (
    <></>
  )
}

export default CartWidget