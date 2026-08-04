import styles from './watch.module.scss';

function Watch(){
    return(
        <>
            <section className={styles.watch}>
                <h2>Ways To Watch</h2>
                <section className={styles.watchLive}>
                    <h5>TURNSTYLE</h5>
                    <p id={styles.live} className={styles.watchMethod}>Stream on TWITCH</p>
                    <p id={styles.youtube} className={styles.watchMethod}>YOUTUBE</p>
                    <p id={styles.instagram} className={styles.watchMethod}>INSTAGRAM</p>
                </section>
                <section className={styles.watchLive}>
                    <h5>IIGHT BET WE LOCKED IN</h5>
                    <p id={styles.live} className={styles.watchMethod}>LIVE on IIGHT BET</p>
                    <p id={styles.youtube} className={styles.watchMethod}>YOUTUBE</p>
                    <p id={styles.instagram} className={styles.watchMethod}>INSTAGRAM</p>
                </section>
                <section className={styles.watchLive}>
                    <h5>QUEENS FIGHT CLUB</h5>
                    <p id={styles.live} className={styles.watchMethod}>LIVE on QFC</p>
                    <p id={styles.youtube} className={styles.watchMethod}>YOUTUBE</p>
                    <p id={styles.instagram} className={styles.watchMethod}>INSTAGRAM</p>
                </section>
                <section className={styles.watchLive}>
                    <h5>RUMBLE IN THE BRONX</h5>
                    <p id={styles.live} className={styles.watchMethod}>LIVE on RUMBLE</p>
                    <p id={styles.youtube} className={styles.watchMethod}>YOUTUBE</p>
                    <p id={styles.instagram} className={styles.watchMethod}>INSTAGRAM</p>
                </section>
                <section className={styles.watchLive}>
                    <h5>KNUCKLE UP CLUB</h5>
                    <p id={styles.live} className={styles.watchMethod}>LIVE on KNUCKLE UP</p>
                    <p id={styles.youtube} className={styles.watchMethod}>YOUTUBE</p>
                    <p id={styles.instagram} className={styles.watchMethod}>INSTAGRAM</p>
                </section>
            </section>
        </>
    )
};

export default Watch;