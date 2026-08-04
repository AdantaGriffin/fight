import styles from './header.module.scss';
import { useApi } from '../Api/api';
import { Link } from 'react-router-dom';

function Header(){
    const {header} = useApi();
    console.log(header)
    return(
        <>
            <header className={header ? styles.headerListExpanded : styles.header}>

                <ul className={styles.headerList}>
                    <li className={styles.headerLink}>
                        <Link to="events">EVENTS</Link>
                    <ul className={styles.dropMenu}>
                        <li className={styles.dropMenuLink}><Link to="">UPCOMING</Link></li>
                        <li className={styles.dropMenuLink}><Link to="">PAST</Link></li>
                        <li className={styles.dropMenuLink}><Link to="">TICKETS</Link></li>
                        <li className={styles.dropMenuLink}><Link to="">VIP EXPERIENCE</Link></li>
                    </ul>
                    </li>
                    <li className={styles.headerLink}>
                        <Link to="rankings">RANKINGS</Link>
                    </li>
                    <li className={styles.headerLink}><Link to="athletes">ATHLETES</Link></li>
                    <li className={styles.headerLink}>
                        <Link to="news">NEWS</Link>
                    </li>
                </ul>

                <h1 className={styles.headerLogo}><Link to="/">TurnStyle</Link></h1>

                <ul className={styles.headerList}>
                    <li className={styles.headerLink}>
                        <Link to="connect">CONNECT</Link>
                    </li>
                    <li className={styles.headerLink}>
                        <Link to="watch">WATCH</Link>
                        <ul className={styles.dropMenu}>
                            <li className={styles.dropMenuLink}><a>STREAM</a></li>
                            <li className={styles.dropMenuLink}>
                                <Link to="podcast">PODCAST</Link>
                            </li>
                            <li className={styles.dropMenuLink}><a>LIVE</a></li>
                        </ul>
                    </li>
                    <li className={styles.headerLink}>4DK</li>
                    <li className={styles.headerLink}>
                        <Link to="shop">SHOP</Link>
                        <ul className={styles.dropMenu}>
                            <li className={styles.dropMenuLink}>
                                <Link to='IIGHTBET WE LOCKED IN'>BRAND 1</Link>
                            </li>
                            <li className={styles.dropMenuLink}>
                                <Link to="RUMBLE IN THE BRONX">BRAND 2</Link>
                            </li>
                            <li className={styles.dropMenuLink}>
                                <Link to="QUEENS FIGHT CLUB">BRAND 3</Link>
                            </li>
                            <li className={styles.dropMenuLink}>
                                <Link to="CUSTOMS">CUSTOMS</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.headerLink}><a>SEARCH</a></li>
                </ul>

            </header>
        </>
    )
};

export default Header;