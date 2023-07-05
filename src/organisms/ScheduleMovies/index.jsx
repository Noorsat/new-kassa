import React from 'react';
import './index.scss';
import NewScheduleSeance from '../ScheduleSeance';

const ScheduleMovies = () => {
    return (
        <div className='movies'>
            <div className='movies__title'>
                Аватар 2: Путь воды
            </div>
            <div className='movies__details'>
                <div className='movies__genre'>
                    Фантастика, боевик 
                </div>
                <div className='movies__duration'>
                    120 минут 
                </div>
                <div className='movies__age_limit'>
                    16+
                </div>
            </div>
            <div className='seances'>
                <NewScheduleSeance />
                <NewScheduleSeance />
                <NewScheduleSeance />
                <NewScheduleSeance />
                <NewScheduleSeance />
                <NewScheduleSeance />
                <NewScheduleSeance />
                <NewScheduleSeance />
            </div>
        </div>
    )
}

export default ScheduleMovies;