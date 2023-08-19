import './index.scss'
import { useParams, useNavigate  } from 'react-router-dom';
import moment from 'moment';
import { HOUR_MINUTES } from '../../utils/formats';

const SeanceOther = ({startTime, hall, seanceId}) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const openSeance = () => {
        navigate(`/${seanceId}`)
    }

    return (
        <div className={`seance__other ${id == seanceId ? 'seance__other-selected' : ''}`} onClick={openSeance}>
            <div className='seance__other-time'>
                { moment(startTime).format(HOUR_MINUTES) }
            </div>
            <div className="seance__other-hall">
                {hall.length > 12 ? hall.substring(0, 12)+`...` : hall}
            </div>
        </div>
    )
}

export default SeanceOther;