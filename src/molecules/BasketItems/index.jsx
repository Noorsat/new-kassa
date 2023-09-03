import { useActions } from '../../hooks/useActions';
import { useBasket } from '../../hooks/useBasket'
import { useSeance } from '../../hooks/useSeance';
import BasketItem from './../../atoms/BasketItem'
import './index.scss'

const BasketItems = () => {
    const { basket } = useBasket();
    const { seance } = useSeance();

    const seatArray = seance?.seatArray

    const { clearBasket, setSeatArray } = useActions();

    const clearAllBasket = () => {
        let newSeatArray = seatArray;

        basket?.map(seat => {
            const row = seat?.seat?.seatRow - 1;
            const col = seat?.seat?.seatCol - 1;

            newSeatArray = newSeatArray.map((r, index) => {
                return r.map((seat, i) => {
                    if (index === row && i === col){
                        return {
                            ...seat,
                            status: 1
                        }
                    }else{
                        return seat
                    }
                })
            })
        })

        setSeatArray(newSeatArray)
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