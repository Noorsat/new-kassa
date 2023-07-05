import './index.scss';
import Burger from '../../atoms/Burger';

const SeanceHeader = () => {
    return ( 
        <div className='seance__header'>
            <div className='seance__header-title'>
                Покупка билетов
            </div>
            <Burger />
        </div>
    )
}

export default SeanceHeader;