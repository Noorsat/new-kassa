import BasketItem from './../../atoms/BasketItem'
import './index.scss'

const BasketItems = () => {
    const data = [
        {
            row:4,
            col:2,
            discount: "Взрослый",
            price: 1200
        },
        {
            row:4,
            col:3,
            discount: "Взрослый",
            price: 1200
        },
        {
            row:4,
            col:4,
            discount: "Взрослый",
            price: 1200
        },
        {
            row:4,
            col:5,
            discount: "Взрослый",
            price: 1200
        },
        {
            row:4,
            col:6,
            discount: "Взрослый",
            price: 1200
        },
        {
            row:4,
            col:6,
            discount: "Взрослый",
            price: 1200
        },
    ]

    return (
        <>
            <div className='basket__items'>
                <div className='basket__items-title'>
                    Заказ
                </div>
                <div className='basket__items-clear'>
                    Очистить все
                </div>
            </div>
            <div className='basket__tickets'>
                {
                    data && data.map(item => (
                        <BasketItem row={item?.row} col={item?.col} discount={item?.discount} price={item?.price} />
                    ))
                }
            </div>
        </>

    )
}

export default BasketItems;