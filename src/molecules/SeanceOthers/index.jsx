import SeanceOther from '../../atoms/SeanceOther';
import './index.scss'

const SeanceOthers = () => {
    const data = [
        {
            time: '14:10',
            hall: 'Зал 1, Laser Comfort',
            id: 1
        },
        {
            time: '16:00',
            hall: 'Зал 2',
            id: 2
        },
        {
            time: '16:00',
            hall: 'Зал 2',
            id: 3
        },
        {
            time: '16:00',
            hall: 'Зал 2',
            id: 4
        },
        {
            time: '16:00',
            hall: 'Зал 2',
            id: 5
        }
    ]

    return (
        <div className='seance__others'>
            {
                data && data.map(item => (
                    <SeanceOther time={item?.time} hall={item?.hall} seanceId={item?.id} />
                ))
            }
        </div>
    )
}

export default SeanceOthers;