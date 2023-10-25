import React from 'react'
import { useLanguage } from '@/store/language'
import Tours from '@/components/Tours';
import { TourProps } from '.';
import Head from 'next/head'

export interface Tour {
    date: string;
    country: string;
    city: string;
    link: string;
    id: number;
}

const DUMMY_TOUR_DATA: Tour[] = [
    {
        date: "20.03.2024",
        country: 'Ukraine',
        city: 'Kyiv',
        link: 'https://www.sol-tickets.com/produkte',
        id: 1
    },
    {
        date: "15.05.2024",
        country: 'Ukraine',
        city: 'Lviv',
        link: 'https://www.sol-tickets.com/produkte',
        id: 2
    },
    {
        date: "17.05.2024",
        country: 'USA',
        city: 'Boston',
        link: 'https://www.sol-tickets.com/produkte',
        id: 3
    },
    {
        date: "19.05.2024",
        country: 'Germany',
        city: 'München',
        link: 'https://www.sol-tickets.com/produkte',
        id: 4
    },
    {
        date: "21.05.2024",
        country: 'Italy',
        city: 'Roma',
        link: 'https://www.sol-tickets.com/produkte',
        id: 5
    },
    {
        date: "23.05.2024",
        country: 'Japan',
        city: 'Tokyo',
        link: 'https://www.sol-tickets.com/produkte',
        id: 6
    },
    {
        date: "25.05.2024",
        country: 'Australia',
        city: 'Melbourne',
        link: 'https://www.sol-tickets.com/produkte',
        id: 7
    }
]







const ToursPage: React.FC<TourProps> = (props) => {
    const { selectedLanguage } = useLanguage();
    const tourHeading = selectedLanguage === 'en' ? 'Upcoming tour dates:' : 'Найближчі концерти туру:';
    return <>
        <Head>
            <title>Mak Tours</title>
            <meta name="description" content="Check out our shows" />
        </Head>
        <Tours tourHeading={tourHeading} tourData={props.tours} />
    </>

}
export async function getStaticProps() {
    const tourData = DUMMY_TOUR_DATA;
    return {
        props: {
            tours: tourData.map(tour => ({
                date: tour.date,
                country: tour.country,
                city: tour.city,
                url: tour.link,
                id: tour.id
            }))
        }
    }
}

export default ToursPage









