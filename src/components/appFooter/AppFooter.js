import './appFooter.scss';
import Menu from "../menu/Menu";
import blackBeans from '../../resources/svg/black-beans.svg';

const appFooter = () => {
    return (
        <footer className='footer'>
            <Menu/>
            <span className='decoration'>
                <img src={blackBeans} alt="Coffee Beans"/>
            </span>
        </footer>
    )
}

export default appFooter;