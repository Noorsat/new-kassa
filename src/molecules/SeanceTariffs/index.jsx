import { useState } from 'react';
import './index.scss'
import SeanceTariff from '../../atoms/SeanceTariff';
import { useActions } from '../../hooks/useActions';

const SeanceTariffs = ({ discounts }) => {
    const [selectedTariffId, setSelectedTariffId] = useState();
    const { selectDiscount } = useActions();

    const filteredDiscounts = new Set();

    const uniqueDiscounts = discounts.filter(obj => {
        if (!filteredDiscounts.has(obj.id)) {
            filteredDiscounts.add(obj.id);
        return true;
        }
        return false;
    });

    const selectedTariffHandler = (id) => {
        selectDiscount(discounts.filter(discount => discount.id === id)[0])
        setSelectedTariffId(id)
    }

    return (
        <div className='seance__tariffs'>
            {
                uniqueDiscounts && uniqueDiscounts.map((item) => (
                    <SeanceTariff 
                        name={item?.name}  
                        value={discounts?.filter(discount => discount?.id === item.id)} 
                        id={item?.id} 
                        selectedTariffId={selectedTariffId} 
                        selectedTariffHandler={selectedTariffHandler}
                    />
                ))
            }
        </div>
    )
}

export default SeanceTariffs;