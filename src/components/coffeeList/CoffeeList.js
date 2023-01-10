import './coffeeList.scss';
import Card from '../card/Card';

const CoffeeList = ({data}) => {

    const elements = data.map(item =>  {
        const {id, ...itemProps} = item;
        return (
            <Card key={id} {...itemProps} />
        )
    })

    return (
        <ul className='coffee-list'>
            {elements}
        </ul>
    )
}

export default CoffeeList;