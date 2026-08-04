import styles from './athletes.module.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Athletes(){

    type Fight = {
        opponent: string;
        outcome: string;
        method: string;
        event: string;
        time: string;
    };

    type Athlete = {
        id: number;
        status: string;
        name: string;
        age: string;
        height: string;
        weight: string;
        record: string;
        neighborhood: string;
        fights: Fight[];
    };

    const [athletes, setAthletes] = useState<Athlete[]>([]);

    useEffect(() => {
        async function getAthletes(){
            const response = await fetch('/athletes.json');
            const result = await response.json();
            //console.log(result.athletes);
            setAthletes(result.athletes);
        }
        getAthletes()
    }, []);
    
    const [userInput, setUserInput] = useState("")
    const filterAthlete = athletes.filter(x => x.name.toLowerCase().includes(userInput.toLowerCase()));
    console.log(userInput);
    return(
        <>
            <section className={styles.athletes}>

                <div className={styles.athletesInput}>
                    <p>({athletes.length}) athletes</p>
                    <form>
                        <label>search athlete:</label>
                        <input onChange={(e) => setUserInput(e.target.value)} value={userInput} type="text" placeholder="athlete name"/>
                    </form>
                </div>

                <ul className={styles.athletesList}>
                    {filterAthlete?.map(x => (
                        <Link to={`/athletes/${x.id}`}>
                            <li 
                            className={styles.item}
                            key={x.id}
                            >
                                <img alt="athletes profile image"/>
                                <div className={styles.athleteText}>
                                    <p className={styles.nickName}>nick name</p>
                                    <p className={styles.name}><b>{x.name}</b></p>
                                    <p className={styles.division}>division</p>
                                    <p className={styles.record}>record</p>
                                </div>
                            </li>
                        </Link>
                    ))}
                    {/*
                    <li className={styles.item}>
                        <img alt="athletes profile image"/>
                        <div className={styles.athleteText}>
                            <p className={styles.nickName}>nick name</p>
                            <p className={styles.name}><b>name</b></p>
                            <p className={styles.division}>division</p>
                            <p className={styles.record}>record</p>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <img alt="athletes profile image"/>
                        <div className={styles.athleteText}>
                            <p className={styles.nickName}>nick name</p>
                            <p className={styles.name}><b>name</b></p>
                            <p className={styles.division}>division</p>
                            <p className={styles.record}>record</p>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <img alt="athletes profile image"/>
                        <div className={styles.athleteText}>
                            <p className={styles.nickName}>nick name</p>
                            <p className={styles.name}><b>name</b></p>
                            <p className={styles.division}>division</p>
                            <p className={styles.record}>record</p>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <img alt="athletes profile image"/>
                        <div className={styles.athleteText}>
                            <p className={styles.nickName}>nick name</p>
                            <p className={styles.name}><b>name</b></p>
                            <p className={styles.division}>division</p>
                            <p className={styles.record}>record</p>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <img alt="athletes profile image"/>
                        <div className={styles.athleteText}>
                            <p className={styles.nickName}>nick name</p>
                            <p className={styles.name}><b>name</b></p>
                            <p className={styles.division}>division</p>
                            <p className={styles.record}>record</p>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <img alt="athletes profile image"/>
                        <div className={styles.athleteText}>
                            <p className={styles.nickName}>nick name</p>
                            <p className={styles.name}><b>name</b></p>
                            <p className={styles.division}>division</p>
                            <p className={styles.record}>record</p>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <img alt="athletes profile image"/>
                        <div className={styles.athleteText}>
                            <p className={styles.nickName}>nick name</p>
                            <p className={styles.name}><b>name</b></p>
                            <p className={styles.division}>division</p>
                            <p className={styles.record}>record</p>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <img alt="athletes profile image"/>
                        <div className={styles.athleteText}>
                            <p className={styles.nickName}>nick name</p>
                            <p className={styles.name}><b>name</b></p>
                            <p className={styles.division}>division</p>
                            <p className={styles.record}>record</p>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <img alt="athletes profile image"/>
                        <div className={styles.athleteText}>
                            <p className={styles.nickName}>nick name</p>
                            <p className={styles.name}><b>name</b></p>
                            <p className={styles.division}>division</p>
                            <p className={styles.record}>record</p>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <img alt="athletes profile image"/>
                        <div className={styles.athleteText}>
                            <p className={styles.nickName}>nick name</p>
                            <p className={styles.name}><b>name</b></p>
                            <p className={styles.division}>division</p>
                            <p className={styles.record}>record</p>
                        </div>
                    </li>*/}
                </ul>

            </section>
        </>
    )
};

export default Athletes;