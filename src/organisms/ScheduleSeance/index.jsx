import './index.scss';
import React from 'react';
import ru from '../../assets/images/rus.png';
import kz from '../../assets/images/kz.png';
import moment from 'moment';
import { useNavigate } from "react-router-dom";

const ScheduleSeance = ({ id, language, startTime, endTime, hall }) => {
    const navigate = useNavigate();

    const now = moment()

    const seanceOpenHandler = () => {
        navigate("/" + id);
    } 

    return (
        <div className='seance' onClick={seanceOpenHandler}>
            <div className='seance__top'>
                <div className='seance__lang'>
                    <div className='seance__lang-icon'>
                        <img src={language === "rus" ? ru : language === "kaz" ? kz : ''} />
                    </div>
                    <div className='seance__lang-type'>
                        { language === "rus" ? <>Рус</> : language === "kaz" ? <>Каз</> : ''}
                    </div>
                </div>
                {/* <div className='seance__hall-type'>
                    3D
                </div> */}
            </div>
            <div className='seance__middle'>
                <div className='seance__time'>
                    { moment(startTime).format("HH:mm") }
                </div>
                {
                    (moment(startTime).diff(now, 'minutes') <= 30 && moment(startTime).diff(now, 'minutes') > 0) && (
                        <div className='seance__left'>
                            <div className='seance__left-dot'>
                            </div>
                            <div className='seance__left-time'>
                                { moment(startTime).diff(now, 'minutes') } мин
                            </div>
                        </div> 
                    )
                }
        
            </div>
            <div className='seance__hall'>
                { hall?.toUpperCase() }
            </div>
        </div>  
    )
}

export default ScheduleSeance;