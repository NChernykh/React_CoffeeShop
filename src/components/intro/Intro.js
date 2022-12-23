import './intro.scss';
import beans from '../../resources/svg/beans.svg';

const Intro = () => {
    return (
        <div className="intro">
            <h2 className='title'>Everything You Love About Coffee</h2>
            <span className='decoration'>
                <img src={beans} alt="Coffee Beans"/>
            </span>
            <p className='intro__text'>We makes every day full of energy and taste</p>
            <p className='intro__text'>Want to try our beans?</p>
            <button className='button button__white intro__button'>More</button>
        </div>
    )
}

export default Intro;