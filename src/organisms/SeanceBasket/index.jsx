import './index.scss';
import BasketItems from './../../molecules/BasketItems'
import BasketOverall from './../../molecules/BasketOverall'
import BasketPayment from '../../molecules/BasketPayment';
import dayjs from 'dayjs';
import { DATE_IN_TEXT_SHORT, HOUR_MINUTES } from '../../utils/formats';

const SeanceBasket = ({ changeSeatStatus }) => {
    const date = dayjs();    

    return (
        <div className='seance__basket'>
            <div className='seance__basket-header'>
                <div className="seance__basket-header-date">
                    { date.format(DATE_IN_TEXT_SHORT) }
                </div>
                <div className="seance__basket-header-time">
                    { date.format(HOUR_MINUTES) }
                </div>
            </div>
            <BasketItems 
                changeSeatStatus={changeSeatStatus}
            />
            <BasketOverall />
            <BasketPayment />
        </div>
    )
}

export default SeanceBasket;