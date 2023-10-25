import React from 'react'
import ticketIcon from '../images/ticket.png'
import Image from 'next/image'
import styles from '../components/SingleAlbum.module.css'
import { Album } from '@/pages/music'
import spotifyIcon from '../images/spotify.png'
import bandCampIcon from '../images/icons8-bandcamp-is-an-american-online-music-company-96.png'

interface AlbumWithDescr extends Album {
    albumDescription: string
}


const SingleAlbum: React.FC<AlbumWithDescr> = ({ title, coverImage, backImage, description, albumDescription, spotifyLink, bandcampLink }) => {
    const backImageUrl = backImage.src
    const backCoverStyle = {
        backgroundImage: `url(${backImageUrl})`,
        backgroundSize: 'cover',
        width: '100%',
        
    };

    return <>
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <div className={styles.frontCover}>
                    <div className={styles.albumWrapper}>
                        <div className={styles.albumCover}>
                            <Image src={coverImage} alt="album-cover" className={styles.albumCoverImage}></Image>
                        </div>
                        <div className={styles.albumTitle}>
                            <p>{title}</p></div>
                    </div>
                </div>
                <div className={styles.backCover}>
                    <div className={styles.albumBgWrapper} style={backCoverStyle}>
                        <div className={styles.albumDescription}>
                            <p>{albumDescription}</p>
                            <div className={styles.albumLinks}>
                                <a href={spotifyLink}> <Image src={spotifyIcon} alt="spotify-icon" className={styles.linkIcon}></Image></a>
                                <a href={bandcampLink}>  <Image src={bandCampIcon} alt="bandcamp-icon" className={styles.linkIcon}></Image> </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
}

export default SingleAlbum

{/* <div className={styles.albumWrapper}>
<div className={styles.albumCover}>
    <Image src={coverImage} alt="album-cover" className={styles.albumCoverImage}></Image>
</div>
<div className={styles.albumTitle}>
    <p>{title}</p></div>
</div> */}