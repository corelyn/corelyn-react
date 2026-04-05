import { Navbar } from '../components/navbar/navbar';
import logo from '../assets/logo.png'
import reactlogo from '../assets/react.svg'
export const Home = () => {
    return (
        <div style={{
            "background-image": "linear-gradient( #252b46 1px, transparent 1px), linear-gradient(90deg, #252b46 1px, transparent 1px)",
  "background-size": "40px 40px", "width": "100vw", "height": "100%", "display": "flex", "flex-direction": "column"
  }} className="home-container">
            <Navbar />
            <section>
                <img className="logo" src={logo} alt="Logo" /> X <img className="logo" src={reactlogo} alt="React Logo"/>
            </section>
        </div>
    )
}