import React from 'react';
import './index.scss';
import {useState, useEffect} from 'react';
import ScheduleDate from './../../molecules/ScheduleDate';
import dayjs from 'dayjs';
import rus from 'dayjs/locale/ru';

const ScheduleDates = ({ selectedDate, dateChangeHandler }) => {
    const [dates, setDates] = useState();

    dayjs.locale(rus);

    useEffect(() => {
        let dates = [];

        dates.push(dayjs())

        for (let i = 1; i < 7; i++){
            dates.push(dayjs().add(i, 'day'));
        }

        setDates(dates);
    }, [])


    return (
        <div className='date'>
            <div className='date__items'>
                {
                    dates?.map((date, index) => (
                        <ScheduleDate 
                            date={date} 
                            selectedDate={selectedDate} 
                            dateChangeHandler={dateChangeHandler} 
                            index={index} 
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ScheduleDates;