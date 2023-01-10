import './filter.scss';

const Filter = (props) => {
    const buttonsData = [
        {name: 'Brazil', label: 'Brazil' },
        {name: 'Kenia', label: 'Kenia' },
        {name: 'Columbia', label: 'Columbia' }
    ];

    const buttons = buttonsData.map(item => {
        const active = props.filter === item.name;
        const clazz = active ? 'btn__active' : '';
        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                key={item.name}
                onClick={() => props.onFilterSelect(item.name)}>
                    {item.label}
            </button>
        )
        
    })

    return (
        <div className="filter-form">
            <p className='filter-form__title'>Or filter</p>
            <div className="filter-form__buttons">
                {buttons}
            </div>
        </div>
    )
}

export default Filter;