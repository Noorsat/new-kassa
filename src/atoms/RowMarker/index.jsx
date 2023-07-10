import './index.scss'

const RowMarker = ({row}) => {
    return (
        <div className='row__marker'>
            {row === -1
            ? ''
            : row
            }
        </div>
    )
}

export default RowMarker;