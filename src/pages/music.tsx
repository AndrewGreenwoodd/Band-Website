import React from 'react'
import Music from '@/components/Music'
import { useLanguage } from '@/store/language'
import { StaticImageData } from 'next/image';
import firstImage from '../images/flowers.jpg'
import secondImage from '../images/mountains-1158269_1280.jpg'
import firstImageBack from '../images/flowers-back.jpg'
import secondImageBack from '../images/sunset-3177086_1280.jpg'
import Head from 'next/head'


export interface Album {
    title:string,
    coverImage:StaticImageData,
    backImage:StaticImageData,
    description:string,
    spotifyLink:string,
    bandcampLink:string
  }

export interface MusicDataProps{
    albums:{
        title:string,
        coverImage:StaticImageData,
        backImage:StaticImageData,
        description:string,
        spotifyLink:string,
        bandcampLink:string
    }[];
}

const DUMMY_ALBUMS_DATA:Album[] = [
    {
        title:'Ultra Herbarium',
        coverImage:firstImage,
        backImage:firstImageBack,
        description:'Our debut album',
        spotifyLink:'https://open.spotify.com/',
        bandcampLink:'https://bandcamp.com/'
    },
    {
        title:'Joyous Departure',
        coverImage:secondImage,
        backImage:secondImageBack,
        description:'Our second album',
        spotifyLink:'https://open.spotify.com/',
        bandcampLink:'https://bandcamp.com/'
    },
]


const MusicPage: React.FC<MusicDataProps> = (props) => {
    const { selectedLanguage } = useLanguage();
    const musicHeading = selectedLanguage === 'en' ? 'Our Releases' : 'Наші Релізи';
    const albumDescr = selectedLanguage === 'en' ? 'You can check this release here:' : 'Ви можете оглянути цей реліз тут:';
    return(
     <>
      <Head>
            <title>Mak Music</title>
            <meta name="description" content="Check out our music" />
         </Head>
     <Music musicHeading={musicHeading} albumDescr={albumDescr} albumsData={props.albums}/>
    </> 
    )
   
}


export async function getStaticProps(){
    const tourData = DUMMY_ALBUMS_DATA;
    return {
        props:{
            albums: tourData.map(album => ({
                title: album.title,
                coverImage:album.coverImage,
                backImage:album.backImage,
                description:album.description,
                spotifyLink:album.spotifyLink,
                bandcampLink:album.bandcampLink
            }))
        }
    }
}



export default MusicPage