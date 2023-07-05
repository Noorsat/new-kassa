import './index.scss'

const BasketOverall = () => {
    return (
        <div className='basket__overall'>
            <div className='basket__overall-wrapper'>
                <div className='basket__overall-title'>
                    Билеты
                </div>
                <div className='basket__overall-title'>
                    5 шт
                </div>
            </div>
            <div className='basket__overall-wrapper'>
                <div className='basket__overall-text'>
                    Взрослый 3 шт x 1200 ₸
                </div>
                <div className='basket__overall-text'>
                    3 600 ₸
                </div>
            </div>
            <div className='basket__overall-wrapper'>
                <div className='basket__overall-text'>
                    Детский 2 шт x 800 ₸
                </div>
                <div className='basket__overall-text'>
                    1 600 ₸
                </div>
            </div>
            <div className='basket__overall-wrapper'>
                <div className='basket__overall-total'>
                    Итого
                </div>
                <div className='basket__overall-total'>
                    5 200 ₸
                </div>
            </div>
        </div>
    )
}

export default BasketOverall;