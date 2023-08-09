import './index.scss';
import { useState } from 'react'; 
import ScheduleDates from "../../organisms/ScheduleDates";
import ScheduleHeader from "../../organisms/ScheduleHeader";
import ScheduleMovies from "../../organisms/ScheduleMovies";
import { useGetScheduleQuery } from "../../store/api/schedule.api";
import moment from 'moment'
import dayjs from 'dayjs'; 
import { FULL_DATE } from '../../utils/formats';
import Loading from '../../atoms/Loading';

const Schedule = () => {
    const [selectedDate, setSelectedDate] = useState(dayjs().format(FULL_DATE));

    const { isLoading, data : movies } = useGetScheduleQuery(selectedDate)

    const dateChangeHandler = (date) => {
        setSelectedDate(dayjs(date).format(FULL_DATE));
    }

    return (
        <div>
            {
                isLoading && (
                    <Loading />
                )
            }
            <ScheduleHeader />
            <ScheduleDates 
                selectedDate={selectedDate}
                dateChangeHandler={dateChangeHandler}
            />
            <div className="wrapper">
                {
                    movies && movies.data && movies.data.map(movie => (
                        <ScheduleMovies 
                            name={movie?.name}
                            genre={movie?.genre}
                            duration={movie?.duration}
                            certification={movie?.certification}
                            seances={movie?.seances}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Schedule;