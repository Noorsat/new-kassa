import { removeLettersFromSeat } from '../../utils/serialization';
import './index.scss'
import classNames from 'classnames';
import { useActions } from './../../hooks/useActions'
import { useBasket } from './../../hooks/useBasket'
import { useSeance } from '../../hooks/useSeance';
import { useLockSeatMutation } from '../../store/api/seance.api';
import { useParams } from 'react-router-dom';
import { seatStatus, zoneTypes } from '../../utils/enums';

const Seat = ({seat, changeSeatStatus, discounts}) => {
    const { id } = useParams();
    const { toggleBasket } = useActions();
    const { seance } = useSeance();

    const [lockSeat] = useLockSeatMutation()

    const generateSeat = classNames({
        seat,
        'seat-free': seat.status === seatStatus.Free,
        'seat-selected' : seat.status === seatStatus.Selected,
        'seat-sold': seat.status === seatStatus.Sold,
        'seat-reserved': seat.status === seatStatus.Reserved,
        'seat-empty': seat?.colText === -1,
        'seat-loveSeats': seat?.zoneName === zoneTypes.loveSeats,
        'seat-vip': seat?.zoneName === zoneTypes.vip
    })

    const click = () => {
        const body = {
            seats: [seat.id],
            seanceId: id
        }

        const discount = discounts?.filter(d => d.id === seance.selectedDiscount?.id && d?.zoneId === seat?.zoneId)[0];


        if (discount){
            lockSeat(body).then(() => {
                const body = {
                    ...discount,
                    seat
                }
                
                toggleBasket(body) 
                changeSeatStatus(seat, seat?.status === 1 ? 2 : 1)
            })
        }
    }

    
 

    return (
        <div className={generateSeat} onClick={click}>
            <div className='seat__col'>
                {seat?.status !== seatStatus.Sold && removeLettersFromSeat(seat?.colText)}
            </div>
        </div>
    )
}

export default Seat;