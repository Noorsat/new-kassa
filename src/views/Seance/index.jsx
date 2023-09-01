import './index.scss'
import { useNavigate } from 'react-router-dom'
import { notification } from 'antd'
import SeanceHeader from './../../organisms/SeanceHeader'
import SeanceInfo from './../../organisms/SeanceInfo'
import SeanceBasket from './../../organisms/SeanceBasket'
import { useParams } from 'react-router-dom';
import { useGetSeanceInfoQuery, useGetSeancePlanQuery, useGetSeanceStatusQuery } from '../../store/api/seance.api'
import Loading from './../../atoms/Loading'
import { useActions } from '../../hooks/useActions'
import { useEffect } from 'react'
import { useSeance } from '../../hooks/useSeance'

const Seance = () => {
    const { id } = useParams();
    const { seance } = useSeance()
    const seatArray = seance?.seatArray;
    const { loadSeance, setSeatArray } = useActions();
    const navigate = useNavigate();

    const { isLoading : seanceInfoLoading, data : seanceInfo, error: seanceInfoError, isSuccess: seanceInfoSuccess } = useGetSeanceInfoQuery(id);
    const { isLoading : seancePlanLoading, data : seancePlan, error: seancePlanError, isSuccess: seancePlanSuccess  } = useGetSeancePlanQuery(id);
    const { isLoading : seanceStatusLoading, data : seanceStatus,  error: seanceStatusError,  isSuccess: seanceStatusSuccess  } = useGetSeanceStatusQuery(id);
   
    if (seanceInfoError || seancePlanError || seanceStatusError){
        navigate('/')
        notification.error({
            message: 'Сеанс не доступен',
        })
    }

    const changeSeatStatus = (seat, status) => {
        const row = seat.seatRow - 1;
        const col = seat.seatCol - 1;

        setSeatArray(seatArray.map((r, index) => {
            return r.map((seat, i) => {
                if (index === row && i === col){
                    return {
                        ...seat,
                        status: status
                    }
                }else{
                    return seat
                }
            })
        }))
      };

    useEffect(() => {
        loadSeance({
            contract: seanceInfo?.contract,
            payments: seanceInfo?.contract?.payments
        })
    }, [seanceInfo])

    return (
        <div>
            <SeanceHeader />
            {
                (seanceInfoLoading && seancePlanLoading && seanceStatusLoading) ?  
                <Loading /> 
                :
                (seanceInfoSuccess && seancePlanSuccess && seanceStatusSuccess) ? 
                    <div className='seances__wrapper'>
                        <SeanceInfo 
                            seanceInfo={seanceInfo} 
                            seancePlan={seancePlan?.data}
                            changeSeatStatus={changeSeatStatus}
                        />
                        <SeanceBasket 
                            changeSeatStatus={changeSeatStatus}
                        />
                    </div>  
                :
                ''
            }
        </div>
    )
}

export default Seance;