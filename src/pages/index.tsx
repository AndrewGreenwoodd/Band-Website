
import React from 'react'
import NewsHeader from '@/components/NewsHeader'
import ToursHeader from '@/components/ToursHeader'
import { useLanguage } from '@/store/language'
import albumImage from '../images/flowers.jpg'
import DividingLine from '@/UI/DividingLine'
import Head from 'next/head'


export interface Tour {
    date: string;
    country: string;
    city: string;
    link: string;
    id:number;
  }

export interface TourProps{
    tours:{
        date:string,
        country:string,
        city: string,
        url: string,
        id: number
    }[];
}

const DUMMY_TOUR_DATA:Tour[] = [
    {
        date: "20.03.2024",
        country: 'Ukraine',
        city: 'Kyiv',
        link: 'https://www.sol-tickets.com/produkte',
        id:1
    },
    {
        date: "15.05.2024",
        country: 'Ukraine',
        city: 'Lviv',
        link: 'https://www.sol-tickets.com/produkte',
        id:2
    },
    {
        date: "17.05.2024",
        country: 'USA',
        city: 'Boston',
        link: 'https://www.sol-tickets.com/produkte',
        id:3
    },
    {
        date: "19.05.2024",
        country: 'Germany',
        city: 'München',
        link: 'https://www.sol-tickets.com/produkte',
        id:4
    }
]


const App: React.FC<TourProps> = (props) => {
    const { selectedLanguage } = useLanguage();
    const newsHeading = selectedLanguage === 'en' ? 'Our Latest News' : 'Останні Новини';
    const newsDescriptionText = selectedLanguage === 'en' ? 'Our latest album Ultra Herbarium is out' : 'Наш останній альбом Ultra Herbarium вже вийшов';
    const buyDescriptionText = selectedLanguage === 'en' ? <p>Check it out on our <a href="https://bandcamp.com/"> Bandcamp </a> </p> : <p>Його можна послухати на <a href="https://bandcamp.com/"> Бендкампі </a> </p>
    const tourHeading = selectedLanguage === 'en' ? 'Upcoming tour dates:' : 'Найближчі концерти туру:'
  
    return <>
         <Head>
            <title>MAK BAND</title>
            <meta name="description" content="Check out our music" />
         </Head>
        <NewsHeader newsDescr={newsDescriptionText} buyDescr={buyDescriptionText} newsImg={albumImage} newsHeading={newsHeading} />
        <DividingLine/>
        <ToursHeader tourData={props.tours} tourHeading={tourHeading} />
    </>
}

export async function getStaticProps(){
    const tourData = DUMMY_TOUR_DATA;
    return {
        props:{
            tours: tourData.map(tour => ({
                date: tour.date,
                country:tour.country,
                city: tour.city,
                url: tour.link,
                id:tour.id
            }))
        }
    }
}

export default App