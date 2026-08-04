import styles from './events.module.scss';
import { Link } from 'react-router-dom';

function Events(){
    

    return(
        <>
            <section className={styles.events}>

                <header className={styles.eventsHeader}>
                    <h6 className={styles.promotion}>X FIGHT NIGHT</h6>
                    <p className={styles.fighters}>X FIGHTER V X FIGHTER</p>
                    <p className={styles.eventCaption}>caption</p>
                    <div className={styles.linkContainer}>
                        <Link to="">View Fight Card</Link>
                        <Link to="">Watch</Link>
                    </div>
                </header>

                <div className={styles.eventsPage}>
                    <ul className={styles.eventsUpcomingList}>
                        <li className={styles.fightCard}>
                            <div className={styles.cardSection}>logo</div>
                            <div className={styles.cardSection}>faceoffs</div>
                            <div className={styles.cardSection}>fight info</div>
                            <div className={styles.cardSection}>watch</div>
                        </li>
                        <li className={styles.fightCard}>
                            <div className={styles.cardSection}>logo</div>
                            <div className={styles.cardSection}>faceoffs</div>
                            <div className={styles.cardSection}>fight info</div>
                            <div className={styles.cardSection}>watch</div>
                        </li>
                        <li className={styles.fightCard}>
                            <div className={styles.cardSection}>logo</div>
                            <div className={styles.cardSection}>faceoffs</div>
                            <div className={styles.cardSection}>fight info</div>
                            <div className={styles.cardSection}>watch</div>
                        </li>
                        <li className={styles.fightCard}>
                            <div className={styles.cardSection}>logo</div>
                            <div className={styles.cardSection}>faceoffs</div>
                            <div className={styles.cardSection}>fight info</div>
                            <div className={styles.cardSection}>watch</div>
                        </li>
                    </ul>
                </div>

            </section>
        </>
    )
};

export default Events;