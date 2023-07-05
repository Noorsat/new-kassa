import { addSpaces } from '../../utils/formatter';
import './index.scss'

const SeanceTariff = ({name, value, id, selectedTariffId, selectedTariffHandler}) => {
    return (
        <div className='seance__tariff' onClick={() => selectedTariffHandler(id)}>
            <div className='seance__tariff-radio'>
                <input type="radio" checked={id === selectedTariffId}/>
            </div>
            <div className='seance__tariff-content'>
                <div className='seance__tariff-type'>
                    { name }
                </div>
                <div className='seance__tariff-value'>
                    { addSpaces(value) }
                </div>
            </div>
        </div>
    )
}

export default SeanceTariff;