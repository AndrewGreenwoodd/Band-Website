import React from 'react'
import styles from './Music.module.css'
import { StaticImageData } from 'next/image';
import SingleAlbum from './SingleAlbum';

interface MusicProps {
    albumsData:{
    title:string,
    coverImage:StaticImageData,
    description:string,
    backImage:StaticImageData,
    spotifyLink:string,
    bandcampLink:string
    }[],
    musicHeading: string;
    albumDescr:string;
  }


const Music: React.FC<MusicProps> = ({albumsData, musicHeading,albumDescr}) => {
    return <>
    <h1 className={styles.newsHeader}>{musicHeading}</h1>
    <div className={styles.musicAlbumsContainer}>
    {albumsData.map((album) => (
                    <SingleAlbum
                        title={album.title}
                        coverImage={album.coverImage}
                        description={album.description}
                        key={album.title}
                        backImage={album.backImage}
                        albumDescription={albumDescr}
                        spotifyLink={album.spotifyLink}
                        bandcampLink={album.bandcampLink}
                    />
                ))}
    </div>
    </>
}

export default Music