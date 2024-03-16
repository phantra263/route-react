import React, { useContext } from 'react'
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { themeContext } from '../App';
import { NavLink } from 'react-router-dom';


export const Header = () => {
    const theme = useContext(themeContext);

    return (
        <div className='header'>
            <ul >
                <li><NavLink to="/products">Products</NavLink></li>
                {
                    theme.user.isLogin && <li><NavLink to="/cart">Cart</NavLink></li>
                }
            </ul>
            <div className='btn-right'>
                {
                    theme.user.isLogin ? (<span style={{color: 'green', marginRight: '10px'}}>{theme.user.userName}</span>) : (<NavLink to="/login" style={{marginRight: '10px'}}>Login</NavLink>)
                }
                <button className='btn-change-theme' onClick={theme.handleTheme}>{theme.theme === 'light' ? <FaSun /> : <FaMoon />}</button>
            </div>
        </div>
    )
}
