import './index.scss'
import RemoveIcon from './../../assets/images/remove.svg';
import { addSpaces } from '../../utils/formatter';

const BasketItem = ({row, col, discount, price}) => {
    return (
        <div className='basket__item'>
            <div className="basket__item-wrapper">
                <div className='basket__item-seat'>
                    {row} ряд, {col} место
                </div>
                <div className='basket__item-remove'>
                    <img src={RemoveIcon} alt='remove-icon' />
                </div>
            </div>            
            <div className="basket__item-wrapper">
                <div className='basket__item-discount'>
                    {discount}
                </div>
                <div className='basket__item-price'>
                    {addSpaces(price)} ₸
                </div>
            </div>        
        </div>
    )
}

export default BasketItem;