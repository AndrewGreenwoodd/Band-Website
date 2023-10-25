import React from 'react'
import ticketIcon from '../images/ticket.png'
import Image from 'next/image'
import styles from '../components/SingleTour.module.css'

interface SingleTourHeaderProps {
    tourDate: string;
    tourCountry: string;
    tourCity: string;
    id:number;
    url:string;
  }


const SingleTour: React.FC<SingleTourHeaderProps> = ({tourDate,tourCity,tourCountry,url}) => {
    return <>
     <li>
        <p className={styles.tourEventDescr}>{tourDate} - {tourCountry} - {tourCity} <a href={url}><Image src={ticketIcon} className={styles.ticketIcon} alt="ticket-icon" /> </a></p>
     </li>
    </>
}

export default SingleTour