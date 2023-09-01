import Button from '../../atoms/Button';
import './index.scss';
import CashIcon from './../../assets/images/cash.svg';
import CardIcon from './../../assets/images/card.svg';
import { useSeance } from '../../hooks/useSeance';

const BasketPayment = () => {
    const { seance } = useSeance();

    console.log(seance)

    return (
        <div className='basket__payment'>
            <div className='basket__payment-wrapper'>
                <Button 
                    backgroundColor="#C31D28"
                    text="Наличными"
                    color="#fff"
                    border={false}
                    icon={CashIcon}
                />
                <Button 
                    backgroundColor="#fff"
                    text="Карта банка"
                    color="#C31D28"
                    border={true}
                    icon={CardIcon}
                />
            </div>
            <Button 
                backgroundColor="#fff"
                text="Забронировать без оплаты"
                color="#222834"
                border={true}
            />
        </div>
    )
}

export default BasketPayment;