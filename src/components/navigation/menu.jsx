import { Link } from "react-router-dom";
import './menu.css';

const Menu = () => {
    return (
        <div className="navigation">
            <div className="container">
                <a href="#"><img src="./img/logo-bookmark.svg" alt="Logo" id="logo" /></a>
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
                        <li>
                            <a href="#" id="btnLogin">LOGIN</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Menu;