import './index.scss';

const Button = ({ backgroundColor, icon, text, color, border }) => {
    return (
        <button 
            style={{
                color: color,
                border: border && '1px solid var(--border-gray, #E3E8F2)',
                background: backgroundColor && backgroundColor
            }}
            className='button'
        >
            {
                icon &&
                    <div className='button__icon'>
                        <img src={icon} alt='icon' />
                    </div>
            }
            {
                text && (
                    <div className='button__text'>
                        {text}
                    </div>
                )
            }
        </button>
    )
}

export default Button;