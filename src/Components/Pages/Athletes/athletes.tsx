import styles from './athletes.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApi } from '../../Api/api';

function Athletes(){
    const {athletes} = useApi();
    
    const [userInput, setUserInput] = useState<string>("");
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
                    
                    {filterAthlete?.sort((a,b) => a.name > b.name ? 1 : -1).map(x => (
                        <Link to={`/athletes/${x.id}`}>
                            <li 
                            className={styles.item}
                            key={x.id}
                            >
                                <img alt="athletes profile image"/>
                                <div className={styles.athleteText}>
                                    <p className={styles.nickName}>real name</p>
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