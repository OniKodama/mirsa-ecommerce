import React from 'react'
import './Menu.scss'
import CloseIcon from '@mui/icons-material/Close';
import {Link} from 'react-router-dom'

const Menu = ({menuOpen, setMenuOpen}) => {
    return (
            <div className= {"menu "+ (menuOpen && "active")}>
                <div className= 'closeIconContainer' onClick = {() =>setMenuOpen(!menuOpen)}>
                    <CloseIcon className='closeIcon'/>
                </div>
                <ul>
                    <li onClick={() => setMenuOpen(false)}>
                        <Link to = '/'>Home</Link>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <Link to = {`/category/women`} className='link'>Women</Link>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <Link to = {`/category/men`} className='link'>Men</Link>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <Link to = 'https://www.whatsapp.com/'>Contact</Link>
                    </li>
                </ul>
        </div>

    )
}

export default Menu