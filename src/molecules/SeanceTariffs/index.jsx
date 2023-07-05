import { useState } from 'react';
import './index.scss'
import SeanceTariff from '../../atoms/SeanceTariff';

const SeanceTariffs = () => {
    const [selectedTariffId, setSelectedTariffId] = useState();

    const data = [
        {
            name: 'Взрослый',
            value: 1200,
            id: 1
        },
        {
            name: 'Студенческий',
            value: 1000,
            id: 2
        },
        {
            name: 'Детский',
            value: 800,
            id: 3
        },
        {
            name: 'Пенсионный',
            value: 800,
            id: 4
        },
        {
            name: 'Другой',
            value: 800,
            id: 5
        },
    ]

    const selectedTariffHandler = (id) => {
        setSelectedTariffId(id)
    }

    return (
        <div className='seance__tariffs'>
            {
                data && data.map((item) => (
                    <SeanceTariff name={item?.name}  value={item?.value} id={item?.id} selectedTariffId={selectedTariffId} selectedTariffHandler={selectedTariffHandler}/>
                ))
            }
        </div>
    )
}

export default SeanceTariffs;