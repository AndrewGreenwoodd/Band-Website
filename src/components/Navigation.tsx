import styles from './Navigation.module.css'
import NavLink from './NavLink'
import { useState } from 'react'
import { useLanguage } from '@/store/language'

const Navigation: React.FC = () => {
    const { selectedLanguage, changeLanguage } = useLanguage();
    const [isOpen, openMenu] = useState(false);

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        changeLanguage(e.target.value);
    };
    console.log(selectedLanguage)
    const toggleNavMenu = () => {
        openMenu(!isOpen);
    }
    return (
        <header className={styles.navigationHeader}>
            <nav className={styles.navbar}>
                <div className={`${styles['nav-menu']} ${isOpen ? styles.open : ''}`}>
                    <ul className={styles.navList}>
                        <li className={styles['nav-item']}>
                            <NavLink href="/" exact className={styles['nav-link']} onClick={toggleNavMenu}>{selectedLanguage === 'en' ? 'News' : 'Новини'}</NavLink>
                        </li>
                        <li className={styles['nav-item']}>
                            <NavLink href="/tours" exact className="nav-item nav-link" onClick={toggleNavMenu}>{selectedLanguage === 'en' ? 'Tour Dates' : 'Тур'}</NavLink>
                        </li>
                        <li className={styles['nav-item']}>
                            <NavLink href="/music" exact className="nav-item nav-link" onClick={toggleNavMenu}>{selectedLanguage === 'en' ? 'Music' : 'Музика'}</NavLink>
                        </li>
                        <li className={styles['nav-item']}>
                            <NavLink href="/contact" exact className="nav-item nav-link" onClick={toggleNavMenu}>{selectedLanguage === 'en' ? 'Contact' : 'Контакт'}</NavLink>
                        </li>


                    </ul>
                    <div className={styles.languageBtn}>
                        {/* <select id="language" value={selectedLanguage} onChange={toggleLanguageHandler}> */}
                        <select id="language-select" value={selectedLanguage} onChange={handleLanguageChange} className={styles.headerSelect}>
                            <option value="en" className={styles.enIcon}>ENG
                            </option>
                            <option value="ua" className={styles.uaIcon}>УКР
                            </option>
                        </select>
                    </div>
                    {/* {isOpen && <BurgerBackdrop onClose ={closeMenu} />} */}
                </div>
                <div className={styles.hamburger} onClick={toggleNavMenu}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
            </nav>

        </header>
    )
}

export default Navigation