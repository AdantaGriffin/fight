import styles from './brand.module.scss';
import { useParams } from 'react-router-dom';

function Brand(){
    const {brand} = useParams();
    return(
        <>
            <section className={styles.brand}>

                <section className={styles.brandHero}>
                    <h2>{brand}</h2>
                </section>

                <section className={styles.brandStore}>
                    <nav className={styles.brandNav}>filter nav</nav>
                    <ul className={styles.brandList}>

                        <li className={styles.brandItem}>
                            <img src="" className={styles.itemImages} alt="item image"/>
                            <p>temp item</p>
                        </li>

                        <li className={styles.brandItem}>
                            <img src="" className={styles.itemImages} alt="item image"/>
                            <p>temp item</p>
                        </li>

                        <li className={styles.brandItem}>
                            <img src="" className={styles.itemImages} alt="item image"/>
                            <p>temp item</p>
                        </li>

                        <li className={styles.brandItem}>
                            <img src="" className={styles.itemImages} alt="item image"/>
                            <p>temp item</p>
                        </li>

                        <li className={styles.brandItem}>
                            <img src="" className={styles.itemImages} alt="item image"/>
                            <p>temp item</p>
                        </li>

                        <li className={styles.brandItem}>
                            <img src="" className={styles.itemImages} alt="item image"/>
                            <p>temp item</p>
                        </li>

                        <li className={styles.brandItem}>
                            <img src="" className={styles.itemImages} alt="item image"/>
                            <p>temp item</p>
                        </li>

                        <li className={styles.brandItem}>
                            <img src="" className={styles.itemImages} alt="item image"/>
                            <p>temp item</p>
                        </li>

                        <li className={styles.brandItem}>
                            <img src="" className={styles.itemImages} alt="item image"/>
                            <p>temp item</p>
                        </li>

                        <li className={styles.brandItem}>
                            <img src="" className={styles.itemImages} alt="item image"/>
                            <p>temp item</p>
                        </li>

                    </ul>
                </section>
            </section>
        </>
    )
};

export default Brand;