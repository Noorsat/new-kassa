import { useActions } from '../../hooks/useActions';
import { useBasket } from '../../hooks/useBasket'
import { useSeance } from '../../hooks/useSeance';
import BasketItem from './../../atoms/BasketItem'
import './index.scss'

const BasketItems = ({ changeSeatStatus }) => {
    const { basket } = useBasket();
    const { seance } = useSeance();

    const { clearBasket } = useActions();

    console.log(seance);
    
    const clearAllBasket = () => {
        basket?.map(seat => {
            changeSeatStatus(seat?.seat, 1);
        })
        clearBasket();
    }

    return (
        <>
            <div className='basket__items'>
                <div className='basket__items-title'>
                    Заказ
                </div>
                <div className='basket__items-clear' onClick={clearAllBasket}>
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