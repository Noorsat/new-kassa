import { removeLettersFromSeat } from '../../utils/serialization';
import './index.scss'
import classNames from 'classnames';
import { useActions } from './../../hooks/useActions'
import { useBasket } from './../../hooks/useBasket'
import { useSeance } from '../../hooks/useSeance';
import { useLockSeatMutation } from '../../store/api/seance.api';
import { useParams } from 'react-router-dom';
import { seatStatus } from '../../utils/enums';

const Seat = ({seat}) => {
    const { id } = useParams();
    const { toggleBasket, setSeatArray } = useActions();
    const { seance } = useSeance();

    const seatArray = seance.seatArray

    const [lockSeat] = useLockSeatMutation()
 
    const generateSeat = classNames({
        seat,
    'seat-free': seat.status === seatStatus.Free,
        'seat-selected' : seat.status === seatStatus.Selected,
        'seat-empty': seat?.colText === -1
    })

    const click = () => {
    const body = {
            seats: [seat.id],
            seanceId: id
        }

        if (seance.selectedDiscount){
            lockSeat(body).then(() => {
                const body = {
                    ...seance.selectedDiscount,
                    seat
                }
                
                toggleBasket(body) 
                changeSeatStatus(seat, seat?.status === 1 ? 2 : 1)
            })
        }
    }

    
  const changeSeatStatus = (seat, status) => {
    const row = seat.seatRow - 1;
    const col = seat.seatCol - 1;

    setSeatArray(seatArray.map((r, index) => {
        return r.map((seat, i) => {
            if (index === row && i === col){
                return {
                    ...seat,
                    status: status
                }
            }else{
                return seat
            }
        })
    }))
  };

    return (
        <div className={generateSeat} onClick={click}>
            <div className='seat__col'>
                {removeLettersFromSeat(seat?.colText)}
            </div>
        </div>
    )
}

export default Seat;