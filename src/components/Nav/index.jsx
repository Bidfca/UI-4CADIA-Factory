import { Link } from "react-router-dom";
import Button from "../Button";
import Logo from "../Logo";
import './styles.css';

function Nav() {
    return (
        <nav className='nav-container'>
            <Link to="/"><Logo className={'logo'} /></Link>
            <ul>
                <li>Pricing</li>
                <li>About Us</li>
                <li>Products</li>
                <li>Blog</li>
                <li>Get in touch</li>
            </ul>
            <div className='buttons-container'>
                <Link to="login"><Button label={'Log In'} className={'green'} /></Link>
                <Link to="signup"><Button label={'Sign Up'} className={'blue'} /></Link>
            </div>
        </nav>
    );
}

export default Nav;