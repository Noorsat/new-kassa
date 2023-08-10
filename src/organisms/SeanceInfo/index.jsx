import './index.scss'
import SeanceOthers from '../../molecules/SeanceOthers';
import MovieInfo from '../../molecules/MovieInfo';
import SeanceDetails from '../../molecules/SeanceDetails';
import SeanceTariffs from '../../molecules/SeanceTariffs';
import SeanceMap from '../../molecules/SeanceMap';

const SeanceInfo = ({ seanceInfo }) => {
    console.log(seanceInfo)

    return (
        <div className='seance__info'>
            <MovieInfo 
                name={seanceInfo?.name}
                genre={seanceInfo?.genre}
                duration={seanceInfo?.duration}
                certification={seanceInfo?.certification}
                startTime={seanceInfo?.seance?.start_time}
            />
            <SeanceOthers />
            <SeanceDetails />
            <SeanceTariffs />
            <SeanceMap />
        </div>
    )
}

export default SeanceInfo;