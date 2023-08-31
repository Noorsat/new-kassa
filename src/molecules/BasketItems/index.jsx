import { useBasket } from '../../hooks/useBasket'
import BasketItem from './../../atoms/BasketItem'
import './index.scss'

const BasketItems = () => {
    const { basket } = useBasket();

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
                    basket && basket.map(item => (
                        <BasketItem row={item?.seat?.rowText} col={item?.seat?.colText} discount={item?.name} price={item?.value} />
                    ))
                }
            </div>
        </>

    )
}

export default BasketItems;