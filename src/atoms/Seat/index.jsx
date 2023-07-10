import { useSelector } from 'react-redux';
import { removeLettersFromSeat } from '../../utils/serialization';
import './index.scss'
import classNames from 'classnames';
import { useActions } from './../../hooks/useActions'

const Seat = ({seat}) => {
    const { toggleBasket } = useActions();

    const { basket } = useSelector(state => state)

    console.log(basket)

    const generateSeat = classNames({
        seat,
        'seat-empty': seat?.colText === -1
    })

    const click = () => {
        toggleBasket(seat)
    }

    return (
        <div className={generateSeat} onClick={click}>
            <div className='seat__col'>
                {removeLettersFromSeat(seat?.colText)}
            </div>
        </div>
    )
}

export default Seat;