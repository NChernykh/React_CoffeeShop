import './menu.scss';
import Logo from '../../resources/svg/logo.svg';

const Menu = () => {
    return (
        <nav className='menu'>
            <ul className='menu__list'>
                <li className='menu__item'>
                    <a className='menu__link' href="#">
                        <img className='logo' src={Logo} alt="logo"></img>Coffee house
                    </a>
                </li>    
                <li className='menu__item'><a className='menu__link' href="#">Our coffee</a></li>
                <li className='menu__item'><a className='menu__link' href="#">For your pleasure</a></li>
            </ul>
        </nav>
    )
}

export default Menu;