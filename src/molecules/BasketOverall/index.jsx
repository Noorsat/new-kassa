import { useBasket } from '../../hooks/useBasket';
import { addSpaces } from '../../utils/formatter';
import './index.scss'

const BasketOverall = () => {
    const { basket } = useBasket();

    const getTotal = () => {
        return basket.length > 0 && basket.reduce((prev, item) => {
            return prev += item?.value
        }, 0)
    }

    console.log(basket);

    const getDiscounts = () => {
        const groupedDiscounts = basket.reduce((result, obj) => {
            const id = obj.id;
            if (!result[id]) {
              result[id] = [];
            }
            result[id].push(obj);
            return result;
          }, {});
          
        return Object.values(groupedDiscounts);

    }

    return (
        <div className='basket__overall'>
            <div className='basket__overall-wrapper'>
                <div className='basket__overall-title'>
                    Билеты
                </div>
                <div className='basket__overall-title'>
                    {basket?.length} шт
                </div>
            </div>
            {console.log(getDiscounts())}
            { getDiscounts()?.map(discount => (
                <div className='basket__overall-wrapper'>
                    <div className='basket__overall-text'>
                        { `${discount[0]?.name} ${discount?.length} шт х ${discount[0]?.value}` }
                    </div>
                    <div className='basket__overall-text'>
                        {addSpaces(discount[0]?.value * discount?.length)} ₸
                    </div>
                </div>
               )) 
            }
            <div className='basket__overall-wrapper'>
                <div className='basket__overall-total'>
                    Итого
                </div>
                <div className='basket__overall-total'>
                    {getTotal()} ₸
                </div>
            </div>
        </div>
    )
}

export default BasketOverall;