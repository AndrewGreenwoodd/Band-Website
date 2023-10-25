import React from 'react'
import styles from './Tours.module.css'
import SingleTour from './SingleTour';
import { ToursHeaderProps } from './ToursHeader';

const Tours: React.FC<ToursHeaderProps> = ({ tourData, tourHeading }) => {
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

export default Tours