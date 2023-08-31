import { useState } from 'react';
import './index.scss'
import SeanceTariff from '../../atoms/SeanceTariff';
import { useActions } from '../../hooks/useActions';

const SeanceTariffs = ({ discounts }) => {
    const [selectedTariffId, setSelectedTariffId] = useState();
    const { selectDiscount } = useActions();

    const selectedTariffHandler = (id) => {
        selectDiscount(discounts.filter(discount => discount.id === id)[0])
        setSelectedTariffId(id)
    }

    return (
        <div className='seance__tariffs'>
            {
                discounts && discounts.map((item) => (
                    <SeanceTariff name={item?.name}  value={item?.value} id={item?.id} selectedTariffId={selectedTariffId} selectedTariffHandler={selectedTariffHandler}/>
                ))
            }
        </div>
    )
}

export default SeanceTariffs;