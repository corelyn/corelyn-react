import { Navbar } from '../components/navbar/navbar';
import logo from '../assets/logo.png'
import reactlogo from '../assets/react.svg'
import './home.css'
import xlogo from '../assets/x.svg'

export const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <section>
                <div className="home-logos">
                    <img className="logo" src={logo} alt="Logo" />
                    <img className="logo x-logo" src={xlogo} alt="X Logo" />
                    <img className="logo" src={reactlogo} alt="React Logo" />
                </div>
                <div className="home-text">
                    <h1 className="home-title" style={{ fontSize: '5rem' }}>Corelyn AI</h1>
                    <p className="home-description" style={{ color: 'gray' }}>- Intelligence, engineered for you -</p>
                </div>
            </section>
        </div>
    )
}