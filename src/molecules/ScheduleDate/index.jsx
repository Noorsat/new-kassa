import React from 'react';
import dayjs from 'dayjs';

const ScheduleDate = ({date, selectedDate, dateChangeHandler, index}) => {
    return (
        <div className={`date__item ${ dayjs(date).format('DD/MM/YYYY') === (dayjs(selectedDate).format('DD/MM/YYYY')) && 'selected' }`} onClick={() => dateChangeHandler(date)}>  
            <div className='date__item-name'>
                { dayjs(date).format('dddd').charAt(0).toUpperCase() + dayjs(date).format('dddd').slice(1) }
            </div>
            <div className='date__item-number'>
                { index === 0 && 'Cегодня, '} { index === 1 && 'Завтра, '} { dayjs(date).format('D MMMM') }
            </div>
        </div>
    )
}

export default ScheduleDate;