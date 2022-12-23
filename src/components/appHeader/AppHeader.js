import './appHeader.scss';
import Menu from "../menu/Menu";

const appHeader = () => {
    return (
        <header className='header'>
            <h1 className='visually-hidden'>Coffee House</h1>
            <Menu/>
        </header>
    )
}

export default appHeader;