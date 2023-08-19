import './index.scss'
import { firstLetterUppercase, getGenres } from '../../utils/formatter';
import dayjs from 'dayjs';
import rus from 'dayjs/locale/ru';
import { DATE_IN_TEXT } from '../../utils/formats';


const MovieInfo = ({ name, genre, duration, certification, startTime }) => {
    dayjs.locale(rus);

    const date = dayjs(startTime);
    const dateOfStart = firstLetterUppercase(date.format(DATE_IN_TEXT));

    return ( 
        <div className='movie__info'>
            <div>
                <div className='movie__info-name'>
                    { name } 
                </div>
                <div className='movie__info-details'>
                    <div className='movie__info-detail' style={{ display: !genre && 'none' }}>
                        { genre && getGenres(genre) }
                    </div>
                    <div className='movie__info-detail' style={{ display: !duration && 'none' }}>
                        { duration } минут
                    </div>
                    <div className='movie__info-detail' style={{ display: !certification && 'none' }}>
                        { certification }
                    </div>
                </div>
            </div>
            <div>
                <div className='movie__info-title'>
                    Сеанс на
                </div>
                <div className="movie__info-time">
                    { dateOfStart }
                </div>
            </div>
          
        </div>
    )
}

export default MovieInfo;