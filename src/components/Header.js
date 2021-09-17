import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to='/'>
                <img className={'logo'} src='./assets/shared/logo.svg' alt={"art"} />
            </Link>
            <Link className={'slideshow-button'} to='/slideshow' >Start Slideshow</Link>
        </header>

    )

}

export default Header;