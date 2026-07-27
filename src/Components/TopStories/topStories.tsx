import styles from './topStories.module.scss';

function TopStories(){
    return(
        <>
            <section className={styles.topStories}>

                <div className={styles.left}>

                    <div className={styles.leftImg}>3</div>

                    <div className={styles.leftText}>
                        <h6>TURNSTYLE 26'</h6>
                        <h2>News Article Title</h2>
                        <p>news caption quick</p>
                        <div className={styles.leftButtons}>
                            <button className={styles.results}>RESULTS</button>
                            <button className={styles.watch}>WATCH</button>
                        </div>
                    </div>

                </div>

                <div className={styles.right}>
                    <h2 className={styles.rightHeader}>Top Stories</h2>
                    <ol className={styles.topStoriesList}>
                        <li className={styles.story}><a href="">story</a></li>
                        <li className={styles.story}><a href="">story</a></li>
                        <li className={styles.story}><a href="">story</a></li>
                        <li className={styles.story}><a href="">story</a></li>
                        <li className={styles.story}><a href="">story</a></li>
                        <li className={styles.story}><a href="">story</a></li>
                        <li className={styles.story}><a href="">story</a></li>
                        <li className={styles.story}><a href="">story</a></li>
                    </ol>
                </div>

            </section>
        </>
    )
};

export default TopStories;