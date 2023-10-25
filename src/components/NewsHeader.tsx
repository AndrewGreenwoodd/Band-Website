import React from 'react'
import styles from './NewsHeader.module.css'
import { StaticImageData } from 'next/image';
import  Image  from 'next/image';
interface NewsHeaderProps {
    newsDescr: string;
    buyDescr: JSX.Element;
    newsImg: StaticImageData;
    newsHeading: string;
  }


const NewsHeader: React.FC<NewsHeaderProps> = ({newsDescr, buyDescr,newsImg, newsHeading}) => {
    return <>
    <h1 className={styles.newsHeader}>{newsHeading}</h1>
    <div className={styles.newsHeaderImageContainer}>
    <a href="https://bandcamp.com/">  <Image src={newsImg} alt="latest-album" className={styles.newsHeaderImage}></Image> </a>
        </div>
    <div className={styles.newsHeaderDescription}>
        <p>{newsDescr}</p>
        {buyDescr}
        
    </div>
    </>
}

export default NewsHeader