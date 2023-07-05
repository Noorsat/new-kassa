import './index.scss'
import BurgerIcon from './../../assets/images/burger.svg'

const Burger = () => {
    return (
        <div className='burger'>
            <img src={BurgerIcon} alt='burger-menu'/>
        </div>
    )
}

export default Burger;