import { useState, useEffect } from 'react'
import { parseRawDataToHall } from './../../utils/parsers'
import './index.scss'
import Screen from '../../assets/images/screen.svg'
import { seats } from '../../data'
import RowMarker from '../../atoms/RowMarker'
import Seat from '../../atoms/Seat'
import SeanceLegends from './../../molecules/SeanceLegends'
import { useSeance } from '../../hooks/useSeance'
import { useActions } from '../../hooks/useActions'
import { zoneTypes } from '../../utils/enums'

const SeanceMap = ({ seancePlan, seanceStatus, changeSeatStatus, discounts }) => {
    const hallMap = parseRawDataToHall(seancePlan && seancePlan)
    const { seance } = useSeance()
    const { setSeatArray } = useActions();
    const seatArray = seance?.seatArray;
    const [rowMarkers, setRowMarkers] = useState();

    useEffect(() => {
      hallMap && (seanceStatus === null || seanceStatus) && drawFirstHallMap(getHallMap(hallMap))
    }, [])

    useEffect(
        () => {
          hallMap && (seanceStatus === null || seanceStatus) && setSeatArray(getHallMap(hallMap))
        },
        [seanceStatus, seancePlan]
    );

    useEffect(() => {
      setRowMarkers(rowMarkersComposer(seatArray))
    }, [seatArray])

    const drawFirstHallMap = (seatArray) => {
        setSeatArray(seatArray);
        setRowMarkers(rowMarkersComposer(seatArray))
    }

    const getHallMap = (hall) => {
        const hallSeats = hall?.zones && [].concat(...hall?.zones?.map((zone) => {
          return zone?.seats
        })) || [];

        const rowsCount = hallSeats.length > 0 ? Math.max.apply(Math, hallSeats.map((o) => o.x)) : 0
        const colsCount = hallSeats.length > 0 ? Math.max.apply(Math, hallSeats.map((o) => o.y)) : 0
        const array = Array(colsCount)?.fill(null)?.map(() => Array(rowsCount).fill({
          seatRow: -1,
          seatCol: -1,
          status: -1,
          rowText: -1,
          colText: -1,
        }));
        
        hallSeats.forEach((item) => {
          const x = item.x;
          const y = item.y;
          const seatArrayX = hall.isPerformanceAreaBottom ? colsCount - y : y - 1
          const seatArrayY = hall.isPerformanceAreaBottom ? rowsCount - x : x - 1
          if (array[seatArrayX]) {
            array[seatArrayX][seatArrayY] = {
              id: item.id,    
              seatRow: item.y,
              seatCol: item.x,
              status: seanceStatus?.find((s) => s.seat_id === item.id)?.status || item.status,
              ticket: seanceStatus?.find((s) => s.seat_id === item.id)?.ticket || seanceStatus?.find((s) => s.seat_id === item.id)?.cashier_id,
              rowText: item.rowText,
              colText: item.seatText,
              name: '',
              zoneColor: item.zoneColor,
              zoneId: item.zoneId,
              zoneName: item.zoneName,
              loveSeatReference: item.loveSeatReference
            };
          }
        });

        return array
    };

    const rowMarkersComposer = (seatArray) => {
        let cnt = 0;
        return (
          seatArray.map((n) => {
            if (n.some(col => col.status !== -1)) {
              cnt = cnt + 1;
              return cnt;
            }
            return -1;
          })
        );
      }
    
    
    return (
      <>
        <div className='seance__map'>
            <div className='seance__map-rows' style={{marginRight: 8}}>
              {
                rowMarkers?.map(row => (
                  <RowMarker row={row}/>
                ))
              }
            </div>
            <div>
              <div className='seance__map-screen'>
                  <div className='seance__map-screen-icon'>
                      <img src={Screen} alt='screen' />
                  </div>
                  <div className="seance__map-screen-title">
                      Экран
                  </div>
              </div>
              <div>
                {
                  seatArray?.map((row, index) => (
                    <div className='seats__row'>
                      {
                        row?.map((seat) => (
                          <Seat 
                            seat={seat}
                            changeSeatStatus={changeSeatStatus}
                            discounts={discounts}
                          />
                        ))
                      }
                    </div>
                  ))
                }
              </div>
            </div>
            <div className='seance__map-rows' style={{marginLeft: 8}}>
              {
                rowMarkers?.map(row => (
                  <RowMarker row={row}/>
                ))
              }
            </div>
        </div>
        <SeanceLegends 
          zones={hallMap?.zones?.filter(zone => zone?.type !== zoneTypes?.default)}
        />
      </>
    )
}

export default SeanceMap;