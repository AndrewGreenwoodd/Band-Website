import styles from './Footer.module.css'

import instagramIcon from '../images/instagram-white.png'
import facebookIcon from '../images/facebook-app-symbo-whitel.png'
import spotifyIcon from '../images/spotify-white.png'
import bandcampIcon from '../images/icons8-bandcamp-white.png'
import { useLanguage } from '@/store/language'
import Image from 'next/image'


const Footer: React.FC = () => {
    const { selectedLanguage } = useLanguage();
    const subscribeToNewsletterHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
      }
      
    return (
        <footer>
            <div className={styles.footerWrapper}>
                <div className={styles.footerFormContainer}>
                    <h4 className={styles.footerHeading}>{selectedLanguage === 'en' ? 'Newsletter' : 'Новини'}</h4>
                    <p>{selectedLanguage === 'en' ? 'Subscribe to our newsletter' : 'Підпишіться на наші новини'}</p>
                    <form action="#" className={styles.footerForm}>
                        <input type="text" placeholder={selectedLanguage === 'en' ? 'Your email' : 'Ваш email'} className={styles.footerInput}></input>
                        <button className={styles.footerButton} type="submit" onClick={subscribeToNewsletterHandler}>{selectedLanguage === 'en' ? 'Sign up' : 'Підписатись'}</button>
                    </form>
                </div>
                <div className={styles.footerFollows}>
                    <h4 className={styles.footerHeading}>{selectedLanguage === 'en' ? 'Follow us' : 'Підпишіться на наші соцмережі'}</h4>
                    <div className={styles.footerIconsBlock}>
                        <a href="https://www.instagram.com/"><Image src={instagramIcon} alt="footer-insta-icon" /></a>
                        <a href="https://uk-ua.facebook.com/"><Image src={facebookIcon} alt="footer-facebook-icon" /></a>
                        <a href="https://spotify.com/"><Image src={spotifyIcon} alt="footer-spotify-icon" /></a>
                        <a href="https://bandcamp.com/"><Image src={bandcampIcon} alt="footer-bandcamp-icon" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;