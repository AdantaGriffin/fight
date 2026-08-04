import styles from './footer.module.scss';

function Footer(){
    return(
        <>
            <footer className={styles.footer}>

                <div className={styles.footerTitle}>
                    <h2>Turntyle</h2>
                </div>
                
                <div className={styles.footerNav}>
                    <ul className={styles.footerNavList}>
                        <li>
                            Turnstyle
                            <ul className={styles.footerNavList2}>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                            </ul>
                        </li>
                        <li>Social Media
                            <ul className={styles.footerNavList2}>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                            </ul>
                        </li>
                        <li>Help
                            <ul className={styles.footerNavList2}>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                            </ul>
                        </li>
                        <li>Legal
                            <ul className={styles.footerNavList2}>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </footer>
        </>
    )
};

export default Footer;