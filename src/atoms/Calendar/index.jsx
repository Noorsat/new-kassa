import './index.scss';
import { DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';

const Calendar = () => {
    return (
       <DatePicker 
        locale={locale} 
        format={'D MMMM'} 
        size='large'
        style={{
            width: 234
        }}
       />
    )
}

export default Calendar;