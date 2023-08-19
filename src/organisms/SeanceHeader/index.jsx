import './index.scss';
import { useNavigate } from 'react-router-dom';
import Burger from '../../atoms/Burger';

const SeanceHeader = () => {
    const navigate = useNavigate();

    const navigateToMain = () => {
        navigate('/')
    }

    return ( 
        <div className='seance__header'>
            <div className='seance__header-title' onClick={navigateToMain}>
                Покупка билетов
            </div>
            <Burger />
        </div>
    )
}

export default SeanceHeader;