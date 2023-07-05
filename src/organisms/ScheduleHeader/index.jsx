import React from 'react';
import Calendar from '../../atoms/Calendar';
import Filter from '../../atoms/Filter';
import './index.scss';
import Search from '../../atoms/Search';

const ScheduleHeader = () => {
    return (
        <div className='header'>
             <div className='header__wrapper'>
                <div className='header__wrapper-left'>
                    <div className='header__time'>
                        16 декабря 2022, 14:43 
                    </div> 
                    <div className='header__title'>
                        Репертуар
                    </div>
                </div>
                <div className='header__wrapper-right'>
                    <div className='header__search'>
                        <Search 
                            placeholder='Поиск'
                            width={250}
                            height={42}
                        />
                    </div>
                    <div className='header__filter'>
                        <Filter />
                    </div>
                    <div className='header__calendar'>
                        <Calendar />
                    </div>
                    <div className='header__cashier'>
                        <div>
                            Кассир: John Wick
                        </div>
                        <div>
                            POS: POS_01
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduleHeader;