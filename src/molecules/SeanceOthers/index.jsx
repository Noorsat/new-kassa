import SeanceOther from '../../atoms/SeanceOther';
import './index.scss'

const SeanceOthers = ({ nearSeance }) => {
    return (
        <div className='seance__others'>
            {
                nearSeance && nearSeance.map(seance => (
                    <SeanceOther startTime={seance?.start_time} hall={seance?.hall?.name} seanceId={seance?.id} />
                ))
            }
        </div>
    )
}

export default SeanceOthers;