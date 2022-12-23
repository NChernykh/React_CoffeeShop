import './ourBest.scss';
import item1 from '../../resources/content/item-1.png';
import item2 from '../../resources/content/item-2.png';
import item3 from '../../resources/content/item-3.png';


const OurBest = () => {
    return (
        <div className="best">
            <h2 className='title'>Our Best</h2>
            <ul className='best__list'>
                <li className='best__item'>
                    <a className='best__link' href="#">
                        <img src={item1} alt="two pack of Coffee" />
                        <h3 className='best__item-title'>Solimo Coffee Beans 2 kg</h3>
                        <p className='best__item-price'>10.73$</p>
                    </a>
                </li>
                <li className='best__item'>
                    <a className='best__link' href="#">
                        <img src={item2} alt="two pack of Coffee" />
                        <h3 className='best__item-title'>Presto Coffee Beans 1 kg</h3>
                        <p className='best__item-price'>15.99$</p>
                    </a>
                </li>
                <li className='best__item'>
                    <a className='best__link' href="#">
                    <img src={item3} alt="two pack of Coffee" />
                        <h3 className='best__item-title'>AROMISTICO Coffee 1 kg</h3>
                        <p className='best__item-price'>6.99$</p>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default OurBest;