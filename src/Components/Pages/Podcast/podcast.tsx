import styles from './podcast.module.scss';

function Podcast(){
    return(
        <>
            <section className={styles.podcast}>
                <section className={styles.podcastHero}>
                    <h2 className={styles.podcastHeroHeader}>Sounds of NYC Hero</h2>
                </section>
                <section className={styles.podcastItem}>Turnstyle</section>
                <section className={styles.podcastItem}>The Hot Rod Show</section>
                <section className={styles.podcastItem}></section>
            </section>
        </>
    )
};

export default Podcast;