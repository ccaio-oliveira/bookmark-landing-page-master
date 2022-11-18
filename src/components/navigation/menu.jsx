import { useState } from 'react';
import './menu.css';

const Menu = () => {
    const [menu, setMenu] = useState('./img/icon-hamburger.svg');
    const [closeOpen, setCloseOpen] = useState('close');

    const changeMenu = () => {
        if (menu === './img/icon-hamburger.svg') {
            setMenu('./img/icon-close.svg');
            setCloseOpen('open');
        } else {
            setMenu('./img/icon-hamburger.svg');
            setCloseOpen('close');
        }
    }
    return (
        <div className="navigation">
            <div className="container">
                <a href="/"><img src="./img/logo-bookmark.svg" alt="Logo" id="logo" /></a>
                <div className="menu" onClick={changeMenu}>
                    <img src={menu} alt="Menu Icon" id='menuIcon' />
                </div>

                <div id="menuToggle" className={`${closeOpen}`}>
                    <div className="up">
                        <a href="/"><img src="./img/logo-bookmark.svg" alt="Logo" id="logo" /></a>
                        <div className="menu" onClick={changeMenu}>
                            <img src={menu} alt="Menu Icon" id='menuIcon' />
                        </div>
                    </div>
                    <div id="navigation">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#features">FEATURES</a>
                                </li>
                                <li>
                                    <a href="#pricing">PRICING</a>
                                </li>
                                <li>
                                    <a href="#contact">CONTACT</a>
                                </li>
                                <button id="btnLogin">LOGIN</button>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;