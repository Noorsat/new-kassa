import ScheduleDates from "../../organisms/ScheduleDates";
import ScheduleHeader from "../../organisms/ScheduleHeader";
import { useGetScheduleQuery } from "../../store/api/schedule.api";

const Schedule = () => {
    const { isLoading, data } = useGetScheduleQuery('2023-08-04T18:27:53')

    console.log(data);
    console.log(isLoading)

    return (
        <div>
            <ScheduleHeader />
            <ScheduleDates />
            <div className="wrapper">
                {/* <NewScheduleMovies />
                <NewScheduleMovies />
                <NewScheduleMovies />
                <NewScheduleMovies />
                <NewScheduleMovies />
                <NewScheduleMovies />
                <NewScheduleMovies /> */}
            </div>
        </div>
    )
}

export default Schedule;