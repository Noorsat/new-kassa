import './index.scss'
import SeanceHeader from './../../organisms/SeanceHeader'
import SeanceInfo from './../../organisms/SeanceInfo'
import SeanceBasket from './../../organisms/SeanceBasket'
import { useParams } from 'react-router-dom';
import { useGetSeanceInfoQuery, useGetSeancePlanQuery, useGetSeanceStatusQuery } from '../../store/api/seance.api'
import Loading from './../../atoms/Loading'
import { useEffect } from 'react';

const Seance = () => {
    const { id } = useParams();

    const { isLoading : seanceInfoLoading, data : seanceInfo } = useGetSeanceInfoQuery(id);
    const { isLoading : seancePlanLoading, data : seancePlan } = useGetSeancePlanQuery(id);
    const { isLoading : seanceStatusLoading, data : seanceStatus } = useGetSeanceStatusQuery(id);

    return (
        <div>
            <SeanceHeader />
            {
                (seanceInfoLoading && seancePlanLoading && seanceStatusLoading) ?  
                <Loading /> 
                :
                <div className='seances__wrapper'>
                    <SeanceInfo 
                        seanceInfo={seanceInfo} 
                        seancePlan={seancePlan?.data}
                    />
                    <SeanceBasket />
                </div>  
            }
        </div>
    )
}

export default Seance;