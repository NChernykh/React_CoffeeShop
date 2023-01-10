import './card.scss';

const Card = (props) => {
    return (
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <li className='card'>
            <a className='card__link' href="#">
                <img src={props.src} alt="two pack of Coffee" />
                <h3 className='card__title'>{props.name} {props.weight}kg</h3>
                <p className='card__country'>{props.country}</p>
                <p className='card__price'>{props.price}$</p>
            </a>
        </li>
    )
}

export default Card;