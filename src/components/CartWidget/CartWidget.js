import './CartWidget.scss'
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const CartWidget = () => {
  return (
    <div className="cartIcon">
        <ShoppingCartOutlinedIcon/>
        <span>2</span>
     </div>
  )
}

export default CartWidget