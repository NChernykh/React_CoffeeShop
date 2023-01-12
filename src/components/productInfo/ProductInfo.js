import { Component } from 'react';

import './productInfo.scss';
import data from '../data/data';
import blackBeans from '../../resources/svg/black-beans.svg';

class ProductInfo extends Component {
    state = {
        item: data[0]
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.selectedId !== prevProps.selectedId) {
            this.updateItem();
        }
    }

    updateItem = () => {
        const {selectedId} = this.props;
        const newItem = data.filter(item => item.id === selectedId)[0];

        this.setState({
            item: newItem
        })
    }

    render () {
        const {item} = this.state;
        return (
            <div className="product">
                <View item={item}/>
            </div>
        )
    }
}

const View = ({item}) => {
    const {img, name, country, description, price} = item;
    return (
        <>
            <img src={img} alt={name} className="product__img" />
            <h2 className='title'>About It</h2>
            <span className='decoration'>
                <img src={blackBeans} alt="Coffee Beans"/>
            </span>
            <div className="product__info">
                <p className="product__row"><strong>Country:</strong>
                    <span>{country}</span>
                </p>
                <p className="product__row"><strong>Description: </strong>
                    <span>
                    {description}
                    </span>
                </p>
                <p className="product__row"><strong>Price: </strong>
                    <span className='bold'>{price} $</span>
                </p>
            </div>
        </>
    )
}

export default ProductInfo;