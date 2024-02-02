import React from "react";
import logo from '../image/logo.png';
import '../style/logo.css'



function Logo(props) {
    return(
    <div className='container-logo'>
        <img src={ logo } className='logo' alt='Logo' />
    </div>
    )
}

export default Logo;