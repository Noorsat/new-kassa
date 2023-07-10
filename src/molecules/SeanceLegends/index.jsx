import './index.scss'
import LoveSeat from './../../assets/images/seat-love.svg'
import VipSeat from './../../assets/images/seat-vip.svg'
import BuySeat from './../../assets/images/seat-buy.svg'
import SelectedSeat from './../../assets/images/seat-selected.svg'

const SeanceLegends = () => {
    return (
        <div className='seance__legends'>
            <div className='seance__legend'>
                <div className='seance__legend-icon'>
                    <img src={LoveSeat} alt='loveSeat' />
                </div>
                <div className='seance__legend-text'>
                    Love seat
                </div>
            </div>
            <div className='seance__legend'>
                <div className='seance__legend-icon'>
                    <img src={VipSeat} alt='vipSeat' />
                </div>
                <div className='seance__legend-text'>
                    VIP
                </div>
            </div>
            <div className='seance__legend'>
                <div className='seance__legend-icon'>
                    <img src={BuySeat} alt='buySeat' />
                </div>
                <div className='seance__legend-text'>
                    Недоступно
                </div>
            </div>
            <div className='seance__legend'>
                <div className='seance__legend-icon'>
                    <img src={SelectedSeat} alt='loveSeat' />
                </div>
                <div className='seance__legend-text'>
                    Выбрано
                </div>
            </div>
        </div>
    )
}

export default SeanceLegends;