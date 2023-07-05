import './index.scss'
import SeanceOthers from '../../molecules/SeanceOthers';
import MovieInfo from '../../molecules/MovieInfo';
import SeanceDetails from '../../molecules/SeanceDetails';
import SeanceTariffs from '../../molecules/SeanceTariffs';
import SeanceMap from '../../molecules/SeanceMap';

const SeanceInfo = () => {
    return (
        <div className='seance__info'>
            <MovieInfo />
            <SeanceOthers />
            <SeanceDetails />
            <SeanceTariffs />
            <SeanceMap />
        </div>
    )
}

export default SeanceInfo;