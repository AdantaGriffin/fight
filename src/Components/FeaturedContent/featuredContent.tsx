import styles from './featuredContent.module.scss';

function FeaturedContent(){
    return(
        <>
            <section className={styles.featuredContent}>

                <h2 className={styles.featuredHeader}>Featured Content</h2>

                <div className={styles.featured}>
                    <div className={styles.featuredArticles}>
                        <article className={styles.article}>1</article>
                        <article className={styles.article}>2</article>
                        <article className={styles.article}>3</article>
                    </div>
                    <div className={styles.featuredPost}>
                        <article className={styles.post}>post 1</article>
                        <article className={styles.post}>post 2</article>
                        <article className={styles.post}>post 3</article>
                    </div>
                </div>

            </section>
        </>
    )
};

export default FeaturedContent;