import './index.scss';
import BasketItems from './../../molecules/BasketItems'
import BasketOverall from './../../molecules/BasketOverall'
import BasketPayment from '../../molecules/BasketPayment';

const SeanceBasket = () => {
    return (
        <div className='seance__basket'>
            <div className='seance__basket-header'>
                <div className="seance__basket-header-date">
                    16 декабря, 2022
                </div>
                <div className="seance__basket-header-time">
                    14:43
                </div>
            </div>
            <BasketItems />
            <BasketOverall />
            <BasketPayment />
        </div>
    )
}

export default SeanceBasket;