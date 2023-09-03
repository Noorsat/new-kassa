import './index.scss'
import SeanceOthers from '../../molecules/SeanceOthers';
import MovieInfo from '../../molecules/MovieInfo';
import SeanceDetails from '../../molecules/SeanceDetails';
import SeanceTariffs from '../../molecules/SeanceTariffs';
import SeanceMap from '../../molecules/SeanceMap';

const SeanceInfo = ({ seanceInfo, seancePlan, seanceStatus, changeSeatStatus }) => {
    const discounts = seancePlan && seancePlan.zones && [].concat(...seancePlan.zones.map(zone => zone?.discounts.map(discount => { return {...discount, zoneId: zone?.id}})))

    return (
        <div className='seance__info'>
            <MovieInfo 
                name={seanceInfo?.name}
                genre={seanceInfo?.genre}
                duration={seanceInfo?.duration}
                certification={seanceInfo?.certification}
                startTime={seanceInfo?.seance?.start_time}
            />
            <SeanceOthers 
                nearSeance={seanceInfo?.near_seances}
            />
            <SeanceDetails 
                startTime={seanceInfo?.seance?.start_time}
                endTime={seanceInfo?.seance?.end_time}
                hall={seanceInfo?.seance?.hall?.name}
                language={seanceInfo?.seance?.language}
                
            />
            <SeanceTariffs 
                discounts={discounts}
            />
            {
                seancePlan && (
                    <SeanceMap 
                        seancePlan={seancePlan}
                        seanceStatus={seanceStatus}
                        changeSeatStatus={changeSeatStatus}
                        discounts={discounts}
                    />
                )
            }
           
        </div>
    )
}

export default SeanceInfo;