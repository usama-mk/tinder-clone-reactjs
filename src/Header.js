import { IconButton } from '@material-ui/core'
import { ForumRounded, Person } from '@material-ui/icons'
import React from 'react'
import './Header.css';

function Header() {
    return (
        <div className="header">
         <IconButton>
         <Person fontSize="large" className="header__icon" />
         </IconButton>

         <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/338_Tinder_logo-512.png" alt="logo" height="30"  />

         <IconButton>
         <ForumRounded fontSize="large" className="header__icon" />
         </IconButton>
        </div>
    )
}

export default Header
