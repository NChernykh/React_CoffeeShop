import './coffeeList.scss';
const CoffeeList = ({data, onItemSelected}) => {

    const elements = data.map(item =>  {
        return (
            <li className='card'
                key={item.id}
                onClick={() => onItemSelected(item.id)}
                tabIndex={0}>
                <div className="card__info">
                    <img src={item.src} alt="two pack of Coffee" />
                    <h3 className='card__title'>{item.name} {item.weight}kg</h3>
                    <p className='card__country'>{item.country}</p>
                    <p className='card__price'>{item.price}$</p>
                </div>
            </li>
        )
    })

    return (
        <ul className='coffee-list'>
            {elements}
        </ul>
    )
}

export default CoffeeList;