import React from "react";
import './header.styles.scss'
import {Link} from 'react-router-dom'
import logo from '../../assets/crown.svg'
import { auth } from "../../firebase/firebase.utils";

const Header = ({currentUser}) => (
    <div className="header">
        <Link className="logo-container" to='/'>
            <img src={logo} className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to='/'>
                HOME
            </Link>
            <Link className="option" to='/shop'>
                SHOP
            </Link>
            <Link className="option" to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                (<><div className="option" onClick={async() => {auth.signOut();}}>SIGN OUT</div>
                <div className="option">{currentUser.displayName.toUpperCase()}</div></>)
                :

                <Link className="option" to='/signin'>
                SIGN IN
                </Link>
            }
           
        </div>
    </div>
)

export default Header;