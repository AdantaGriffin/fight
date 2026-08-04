import styles from './rankings.module.scss';

function Rankings(){
    return(
        <>
            <section className={styles.rankings}>
                <header>
                    <h2>type - RANKINGS</h2>
                    <ul className={styles.rankingsList}>

                        <li className={styles.rankingWeight}>
                            <p>205+</p>
                            <ul className={styles.rankingClassChamp}>
                                <li>Champion</li>
                            </ul>
                            <ol className={styles.rankingRankList}>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                            </ol>
                        </li>

                        <li className={styles.rankingWeight}>
                            <p>199-185</p>
                            <ul className={styles.rankingClassChamp}>
                                <li>Champion</li>
                            </ul>
                            <ol className={styles.rankingRankList}>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                            </ol>
                        </li>

                        <li className={styles.rankingWeight}>
                            <p>184-170</p>
                            <ul className={styles.rankingClassChamp}>
                                <li>Champion</li>
                            </ul>
                            <ol className={styles.rankingRankList}>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                            </ol>
                        </li>

                        <li className={styles.rankingWeight}>
                            <p>169-155</p>
                            <ul className={styles.rankingClassChamp}>
                                <li>Champion</li>
                            </ul>
                            <ol className={styles.rankingRankList}>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                            </ol>
                        </li>

                        <li className={styles.rankingWeight}>
                            <p>150-</p>
                            <ul className={styles.rankingClassChamp}>
                                <li>Champion</li>
                            </ul>
                            <ol className={styles.rankingRankList}>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                            </ol>
                        </li>

                    </ul>
                </header>
            </section>
        </>
    )
};

export default Rankings;