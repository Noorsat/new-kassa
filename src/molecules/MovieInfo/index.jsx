import './index.scss'

const MovieInfo = ({ name, genre, duration, certification, startTime }) => {
    return ( 
        <div className='movie__info'>
            <div>
                <div className='movie__info-name'>
                    { name } 
                </div>
                <div className='movie__info-details'>
                    <div className='movie__info-detail'>
                        Фантастика, боевик
                    </div>
                    <div className='movie__info-detail'>
                        { duration } минут
                    </div>
                    <div className='movie__info-detail'>
                        { certification }
                    </div>
                </div>
            </div>
            <div>
                <div className='movie__info-title'>
                    Сеанс на
                </div>
                <div className="movie__info-time">
                    Вторник, 22 декабря, 2022
                </div>
            </div>
          
        </div>
    )
}

export default MovieInfo;