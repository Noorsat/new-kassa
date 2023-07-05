import SeanceHeader from './../../organisms/SeanceHeader'
import SeanceInfo from './../../organisms/SeanceInfo'
import SeanceBasket from './../../organisms/SeanceBasket'
import './index.scss'

const Seance = () => {
    return (
        <div className='seance'>
            <SeanceHeader />
            <div className='seance__wrapper'>
                <SeanceInfo />
                <SeanceBasket />
            </div>
        </div>
    )
}

export default Seance;