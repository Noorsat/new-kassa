import { useState } from 'react'; 
import Button from '../../atoms/Button';
import './index.scss';
import CashIcon from './../../assets/images/cash.svg';
import CardIcon from './../../assets/images/card.svg';
import { useSeance } from '../../hooks/useSeance';
import { useParams } from 'react-router-dom';
import { useBasket } from '../../hooks/useBasket';
import { useBuyTicketMutation } from '../../store/api/seance.api';
import { useActions } from '../../hooks/useActions';
import Loading from '../../atoms/Loading';

const BasketPayment = () => {
    const { clearBasket } = useActions();
    const { seance } = useSeance();
    const { basket } = useBasket();
    const { id } = useParams();
    
    const [loading, setLoading] = useState(false);

    const [buyTicket] = useBuyTicketMutation();

    const buy = (type) => {
        setLoading(true);

        const paymentId = seance?.payments?.filter(payment => payment?.name === type)[0]?.id

        const body = {
            contract: {
                id: seance?.contract?.id
            },
            payment: {
                id: paymentId
            },
            seance_id: id,
            seats: basket?.map((seat) => {
                return {
                    discount_id: seat?.id,
                    id: seat?.seat?.id,
                    zone_id: seat?.seat?.zoneId
                }
            })
        }

        buyTicket(body).then((res) => {
            setLoading(false)
            clearBasket();
        })
    }

    return (
        <>
            { loading && <Loading /> }
            <div className='basket__payment'>
                <div className='basket__payment-wrapper'>
                    <Button 
                        backgroundColor="#C31D28"
                        text="Наличными"
                        color="#fff"
                        border={false}
                        icon={CashIcon}
                        onClick={() => buy('Оплата наличными')}
                    />
                    <Button 
                        backgroundColor="#fff"
                        text="Карта банка"
                        color="#C31D28"
                        border={true}
                        icon={CardIcon}
                        onClick={() => buy('Оплата картой')}
                    />
                </div>
                <Button 
                    backgroundColor="#fff"
                    text="Забронировать без оплаты"
                    color="#222834"
                    border={true}
                />
            </div>
        </>
    )
}

export default BasketPayment;