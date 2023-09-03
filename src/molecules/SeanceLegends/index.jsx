import './index.scss'
import LoveSeat from './../../assets/images/seat-love-small.svg'
import VipSeat from './../../assets/images/seat-vip-small.svg'
import BuySeat from './../../assets/images/seat-buy-small.svg'
import ReservedSeat from './../../assets/images/seat-reserved-small.svg';
import SelectedSeat from './../../assets/images/seat-selected-small.svg'
import { zoneTypes } from '../../utils/enums'

const SeanceLegends = ({ zones }) => {
    return (
        <div className='seance__legends'>
            {
                zones?.find(zone => zone?.type === zoneTypes.loveSeats) && (
                    <div className='seance__legend'>
                        <div className='seance__legend-icon'>
                            <img src={LoveSeat} alt='loveSeat' />
                        </div>
                        <div className='seance__legend-text'>
                            Love seat
                        </div>
                    </div>
                )
            }
              {
                zones?.find(zone => zone?.type === zoneTypes.vip) && (
                    <div className='seance__legend'>
                        <div className='seance__legend-icon'>
                            <img src={VipSeat} alt='vipSeat' />
                        </div>
                        <div className='seance__legend-text'>
                            VIP
                        </div>
                    </div>
                )
            }
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
                    <img src={ReservedSeat} alt='buySeat' />
                </div>
                <div className='seance__legend-text'>
                    Забронировано
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