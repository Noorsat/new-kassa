import './index.scss'

const SeanceDetails = () => {
    return (
        <div className='seance__details'>
            <div>
                <div className='seance__details-time'>
                    14:10 – 15:50
                </div>
                <div className='seance__details-wrapper'>
                    <div className='seance__details-hall'>
                        <span className='seance__details-hall-name'>Зал:</span> 1 зал, Comfort Laser <span className='seance__details-hall-type'>IMAX</span>
                    </div>
                    <div className='seance__details-lang'>
                        <span className='seance__details-lang-name'>Язык:</span> <span className='seance__details-lang-icon'>Русский</span>
                    </div>
                </div>
            </div>
            <div>
                <div className='seance__details-left-name'>
                    До начала осталось
                </div>
                <div className='seance__details-left-time'>
                    05:15:09
                </div>    
            </div>
        </div>
    )
}

export default SeanceDetails;