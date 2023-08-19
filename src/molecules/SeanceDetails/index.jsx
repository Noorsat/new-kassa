import './index.scss'
import moment from 'moment'
import { FULL_DATE, HOUR_MINUTES } from '../../utils/formats';
import ru from '../../assets/images/rus.png';
import kz from '../../assets/images/kz.png';
import Countdown from 'react-countdown';

const SeanceDetails = ({ startTime, endTime, hall, language }) => {

    const renderer = ({ hours, minutes, seconds, completed }) => {
        return <span>{String(hours).length === 1 ? `0${hours}` : hours}:{String(minutes).length === 1 ? `0${minutes}` : minutes}:{String(seconds).length === 1 ? `0${seconds}` : seconds}</span>;
    };

    return (
        <div className='seance__details'>
            <div>
                <div className='seance__details-time'>
                    { moment(startTime).format(HOUR_MINUTES) } - { moment(endTime).format(HOUR_MINUTES) }
                </div>
                <div className='seance__details-wrapper'>
                    <div className='seance__details-hall'>
                        <span className='seance__details-hall-name'>Зал:</span> { hall } 
                    </div>
                    <div className='seance__details-lang'>
                        <span className='seance__details-lang-icon'>
                            <img height={18} src={language === 'rus' ? ru : language === 'kaz' ? kz : ''} />
                        </span>
                        <span className='seance__details-lang-text'>
                            { language === "rus" ? 'Русский' : language === "kaz" ? 'Казахский' : ''}
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <div className='seance__details-left-name'>
                    До начала осталось
                </div>
                <div className='seance__details-left-time'>
                    <Countdown 
                        date={moment(startTime).format(FULL_DATE)} 
                        intervalDelay={0}
                        renderer={renderer} 
                    />
                </div>    
            </div>
        </div>
    )
}

export default SeanceDetails;