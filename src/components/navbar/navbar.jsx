import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <>
        <nav className="navbar">
            {/* logo */}
            <img src={logo} alt="Corelyn logo" className="logo" />
            <span className="navbarTitle">Corelyn AI</span>
            {/* links */}
            <Link to="/" className="app-link">Home</Link>
            <Link to="/chat" className="app-link">Chat</Link>
        </nav>
        </>
    )
}