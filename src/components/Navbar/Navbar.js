import CartWidget from '../CartWidget/CartWidget'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className = "navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <a className = "link">Women</a>
          </div>
          <div className="item">
            <a href = "#" className = "link" >Men</a>
          </div>
        </div>
    
        <div className="center">
          <a href = "#" className = "link">MIRSA</a>
        </div>

        <div className="right">
          <div className="">
            <a href = "#" className = "link" to = "/item">Homepage</a>
          </div>
          <div className="">
            <a href = "#" className = "link" to = "/item">About</a>
          </div>
          <div className="icons">
            <CartWidget />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar