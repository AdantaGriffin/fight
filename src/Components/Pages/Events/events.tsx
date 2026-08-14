import styles from './events.module.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useApi } from '../../Api/api';

function Events(){
    const [event, setEvent] = useState<boolean>(false);
    const {events} = useApi();

    return(
        <>
            <section className={styles.events}>

                <header className={styles.eventsHeader}>
                    <h6 className={styles.promotion}>{events[0]?.name}</h6>
                    <p className={styles.fighters}>
                        <img src={events[0]?.image} alt={'main event fighters'}/>
                    </p>
                    <p className={styles.eventCaption}>{events[0]?.caption}</p>
                    <div className={styles.linkContainer}>
                        <Link to="">View Fight Card</Link>
                        <Link to="">Watch</Link>
                    </div>
                </header>

                <div className={styles.eventsFilter}>

                    <div 
                    onClick={() => setEvent(prev => !prev)}
                    className={event ? styles.button : styles.past}
                    >
                        past
                    </div>

                    <div 
                    onClick={() => setEvent(prev => !prev)}
                    className={event ? styles.upcoming : styles.button}
                    >
                        upcoming
                    </div>
                </div>

                <div className={styles.eventsPage}>
                    <ul className={styles.eventsUpcomingList}>
                        {events?.map(x => (
                            <Link to="">
                                <li key={x.id} className={styles.fightCard}>

                                    <div className={styles.cardSection}>logo</div>

                                    <div className={styles.cardSection}>{x.fights?.map(fight => (
                                        <p>{fight?.fighters[0]} vs {fight?.fighters[1]}</p>
                                    ))}</div>

                                    <div className={styles.cardSection}>{x.name}</div>

                                    <div className={styles.cardSection}><a>watch</a></div>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>

            </section>
        </>
    )
};

export default Events;