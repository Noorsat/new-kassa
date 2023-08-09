import './index.scss'
import SeanceHeader from './../../organisms/SeanceHeader'
import SeanceInfo from './../../organisms/SeanceInfo'
import SeanceBasket from './../../organisms/SeanceBasket'
import { useParams } from 'react-router-dom';
import { useGetSeanceInfoQuery, useGetSeancePlanQuery, useGetSeanceStatusQuery } from '../../store/api/seance.api'

const Seance = () => {
    const { id } = useParams();

    const { isLoading : seanceInfoLoading, data : seanceInfo } = useGetSeanceInfoQuery(id);
    const { isLoading : seancePlanLoading, data : seancePlan } = useGetSeancePlanQuery(id);
    const { isLoading : seanceStatusLoading, data : seanceStatus } = useGetSeanceStatusQuery(id);

    return (
        <div className='seances'>
            <SeanceHeader />
            <div className='seances__wrapper'>
                <SeanceInfo />
                <SeanceBasket />
            </div>
        </div>
    )
}

export default Seance;