import ScheduleDates from "../../organisms/ScheduleDates";
import ScheduleHeader from "../../organisms/ScheduleHeader";

const Schedule = () => {
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