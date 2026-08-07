import styles from './athleteProfile.module.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function AthleteProfile(){
    type Fight = {
        opponent: string;
        outcome: string;
        method: string;
        event: string;
        time: string;
    };

    type Athlete = {
        id: string;
        status: string;
        name: string;
        age: string;
        height: string;
        weight: string;
        record: string;
        neighborhood: string;
        fights: Fight[];
    };

    const {id} = useParams();

    const [athlete, setAthlete] = useState<Athlete | null>(null);

    useEffect(() => {
        async function getAthlete(){
            const response = await fetch('/athletes.json');
            const result = await response.json();
            const found = result.athletes.find((x: Athlete) => x.id == id);
            setAthlete(found ?? null);
            //console.log(found)
        }
        getAthlete()
    }, [id]);
    console.log(athlete)
    return(
        <>
            <section className={styles.athleteProfile}>

                <section className={styles.athleteHero}>
                    <article className={styles.heroArticle}>
                        <p>{id}</p>
                        <p className={styles.heroStatus}>{athlete?.status}</p>
                        <p className={styles.heroName}>{athlete?.name}</p>
                        <p className={styles.heroRecord}>{athlete?.record} (W-L-D)</p>
                    </article>
                </section>

                <section className={styles.media}>
                    <h2>Highlights</h2>
                    <div>
                        list of videos and images
                    </div>
                </section>

                <section className={styles.record}>
                    <h2>Athlete Record</h2>
                    <ul className={styles.recordList}>
                        {athlete?.fights.map(x => (
                            <li
                            className={styles.recordItem} 
                            key={x.opponent}>

                                <div className={styles.recordHeader}>
                                    <p className={styles.recordFighterNames}>{athlete?.name} vs {x.opponent}</p>
                                    <p className={styles.recordFightDate}>date</p>
                                </div>

                                <div className={styles.recordData}>

                                    <div className={styles.recordFighterProfiles}>image</div>

                                    <div className={styles.recordInfo}>
                                        <div className={styles.recordOutcome}>
                                            <p>result</p>
                                            <p>{x.outcome}</p>
                                        </div>
                                        <div className={styles.recordFightTime}>
                                            <p>method</p>
                                            <p>{x.method}</p>
                                        </div>
                                        <div className={styles.recordMethod}>
                                            <p>event</p>
                                            <p>{x.event}</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
                
                <section className={styles.biography}>
                    <h5>BIO</h5>

                    <div>
                        <h6>status</h6>
                        <p>{athlete?.status}</p>
                    </div>

                    <div>
                        <h6>neighborhood</h6>
                        <p>{athlete?.neighborhood}</p>
                    </div>

                    <div>
                        <div>
                            <h6>height</h6>
                            <p>{athlete?.height}</p>
                        </div>
                        <div>
                            <h6>weight</h6>
                            <p>{athlete?.weight}</p>
                        </div>
                    </div>
                    <div>last fight: {athlete?.fights[athlete.fights.length - 1]?.event}</div>
                </section>
            </section>
        </>
    )
};

export default AthleteProfile;