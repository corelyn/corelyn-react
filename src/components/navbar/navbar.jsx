import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import './navbar.css';
import open from '../../assets/button_images/open.svg';
export const Navbar = () => {
    return (
        <>
        <nav className="navbar">
            {/* brand */}
            <img src={logo} alt="Corelyn logo" className="sidebarLogo" />
            <span className="brand-text">Corelyn AI</span>
            {/* link */}
            <Link to="/chat" className="app-link open-chat">Open Chat <img src={open} alt="Open Chat" height="12px"/></Link>
        </nav>
        </>
    )
}