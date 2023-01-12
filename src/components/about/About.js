import './about.scss';
import blackBeans from '../../resources/svg/black-beans.svg';

const About = () => {
    return (
        <section className="about">
            <h2 className='title'>About Us</h2>
            <span className='decoration'>
                <img src={blackBeans} alt="Coffee Beans"/>
            </span>
            <p className='about__text'>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.
                <br/>
                Now residence dashwoods she excellent you. Shade being under his bed her, Much
                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                horrible but confined day end marriage. Eagerness furniture set preserved far
                recommend. Did even but nor are most gave hope. Secure active living depend son
                repair day ladies now.</p>
        </section>
    )
}

export default About;