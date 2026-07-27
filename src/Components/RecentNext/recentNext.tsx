import styles from './recentNext.module.scss';

function RecentNext(){
    return(
        <>
            <section className={styles.recentNext}>

                <div className={styles.recent}>
                    <div className={styles.recentFighters}>
                        <div className={styles.fighter}>image 1</div>
                        <div className={styles.fighter}>image 2</div>
                    </div>
                    <div className={styles.recentInfo}>
                        <div>X vs X</div>
                        <div>Queens Fight Club</div>
                    </div>
                </div>

                <div className={styles.next}>
                    <div className={styles.nextFighters}>
                        <div className={styles.fighter}>image 1</div>
                        <div className={styles.fighter}>image 2</div>
                    </div>
                    <div className={styles.nextInfo}>
                        <div>X vs X</div>
                        <div>Aight Bet</div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default RecentNext;