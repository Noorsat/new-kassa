import React from 'react';
import './index.scss';
import moment from 'moment';
import ScheduleSeance from '../ScheduleSeance';
import { getGenres } from '../../utils/formatter';

const ScheduleMovies = ({ name, genre, duration, certification, seances }) => {
    const now = moment()

    return (
        <div className='movies'>
            <div className='movies__title'>
                { name }
            </div>
            <div className='movies__details'>
                <div className='movies__genre' style={{display: !genre && 'none'}}>
                    {
                        genre && getGenres(genre)
                    }
                </div>
                <div className='movies__duration' style={{ display: !duration && 'none' }}>
                    { duration } минут 
                </div>
                <div className='movies__age_limit' style={{ display: !certification && 'none' }}>
                    { certification }
                </div>
            </div>
            <div className='seances'>
                {
                    seances && seances.map(seance => {
                        if (moment(seance.end_time).diff(now, 'minutes') > 0){
                            return (
                                <ScheduleSeance 
                                    id={seance?.id}
                                    language={seance?.language}
                                    startTime={seance?.start_time}
                                    endTime={seance?.end_time}
                                    hall={seance?.hall?.name}
                                />  
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default ScheduleMovies;