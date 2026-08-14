import styles from './topStories.module.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function TopStories(){

    type Article = {
            "id":number;
            "image":string;
            "type":string;
            "title":string;
            "caption":string;
            "article":string;
            "aurthor":string;
            "date":string;
    }
    const [mainArticle, setMainArticle] = useState<Article | null>(null);
    useEffect(() => {
        async function getArticles(){
            const response = await fetch('articles.json');
            const result = await response.json();
            console.log(result.articles);
            setMainArticle(result.articles.pop());
        }
        getArticles()
    }, []);
    return(
        <>
            <section className={styles.topStories}>

                <div className={styles.left}>

                    <div className={styles.leftImg}>
                        {/*<img src={mainArticle?.image} alt="men hoping the turnstyle"/>*/}
                    </div>

                    <div className={styles.leftText} style={{backgroundImage:"url('/images/knuckleUp89.png')", backgroundSize:"cover", backgroundPosition:"center"}} >
                        <h6>TURNSTYLE 26'</h6>
                        <h2>{mainArticle?.title}</h2>
                        <p>{mainArticle?.caption}</p>
                        <div className={styles.leftButtons}>
                            <Link to="events" className={styles.checkout}>Check Out</Link>
                            <Link to="" className={styles.watch}>WATCH</Link>
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