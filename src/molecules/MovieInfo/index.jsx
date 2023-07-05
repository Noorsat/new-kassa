import './index.scss'

const MovieInfo = () => {
    return ( 
        <div className='movie__info'>
            <div>
                <div className='movie__info-name'>
                    Аватар 2: Путь воды
                </div>
                <div className='movie__info-details'>
                    <div className='movie__info-detail'>
                        Фантастика, боевик
                    </div>
                    <div className='movie__info-detail'>
                        120 минут
                    </div>
                    <div className='movie__info-detail'>
                        16+
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