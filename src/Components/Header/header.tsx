import styles from './header.module.scss';
import { useApi } from '../Api/api';

function Header(){
    const {header, setHeader} = useApi();
    console.log(header)
    return(
        <>
            <header className={header ? styles.headerListExpanded : styles.header}>

                <ul className={styles.headerList}>
                    <li className={styles.headerLink}>Events</li>
                    <li className={styles.headerLink}>Rankings</li>
                    <li className={styles.headerLink}>Athletes</li>
                    <li className={styles.headerLink}>News</li>
                </ul>

                <h1 className={styles.headerLogo}>TurnStyle</h1>

                <ul className={styles.headerList}>
                    <li className={styles.headerLink}>Connect</li>
                    <li className={styles.headerLink}>Watch</li>
                    <li className={styles.headerLink}>4DK</li>
                    <li className={styles.headerLink}>Shop</li>
                    <li className={styles.headerLink}>search</li>
                </ul>

            </header>
        </>
    )
};

export default Header;