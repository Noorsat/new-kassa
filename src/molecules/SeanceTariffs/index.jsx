import { useState } from 'react';
import './index.scss'
import SeanceTariff from '../../atoms/SeanceTariff';

const SeanceTariffs = ({ discounts }) => {
    const [selectedTariffId, setSelectedTariffId] = useState();

    const selectedTariffHandler = (id) => {
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