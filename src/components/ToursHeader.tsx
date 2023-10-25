import React from 'react'
import styles from './ToursHeader.module.css'
import SingleTour from './SingleTour';


export interface ToursHeaderProps {
    tourData: {
      date:string,
      country:string,
      city:string,
      url:string,
      id:number
    }[];
    tourHeading: string;
}


const ToursHeader: React.FC<ToursHeaderProps> = ({ tourData, tourHeading }) => {
      console.log(tourData)
    
    return <>
        <div className={styles.tourWrapper}>
        <h1 className={styles.tourHeader}>{tourHeading}</h1>
        <ul className={styles.tourList}>
      {tourData.map((tourItem) => (
        <SingleTour
          tourDate={tourItem.date}
          id={tourItem.id}
          tourCity={tourItem.city}
          tourCountry={tourItem.country}
          key={tourItem.id}
          url={tourItem.url}
        />
      ))}
    </ul>
    </div>
    </>
}

export default ToursHeader