import styles from './news.module.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function News(){
    type Article = {
            "id":number;
            "image": string;
            "type": string;
            "title":string;
            "caption":string;
            "article":string;
            "aurthor":string;
            "date":string;
    }

    const [articles, setArticles] = useState<Article[]>([]);
        useEffect(() => {
            async function getArticles(){
                const response = await fetch('articles.json');
                const result = await response.json();
                console.log(result.articles);
                setArticles(result.articles)
            }
            getArticles()
        }, []);
    return(
        <>
            <section className={styles.news}>

                <header className={styles.newsArticlesHeader}>
                    <h6>TRENDING</h6>
                    <h2>MEDIA & ARTICLES</h2>
                </header>

                <main className={styles.newsArticlesMain}>

                    <div className={styles.newsArticlesFilter}>
                        <p>{articles.length} articles</p>
                        <select>
                            <option>Sort by: Newest</option>
                            <option>this week</option>
                            <option>this month</option>
                            <option>this year</option>
                        </select>
                    </div>

                    <ul className={styles.newsArticlesList}>
                        {articles?.map(x => (
                            <li
                            className={styles.article} 
                            key={x.id}>
                                <img src={x.image} alt={`${x.title} image`}/>
                                <div className={styles.articleText}>
                                    <p className={styles.type}>{x.type}</p>
                                    <Link to="">
                                        <p className={styles.title}>{x.title}</p>
                                    </Link>
                                    <p className={styles.caption}>{x.caption}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                </main>

            </section>
        </>
    )
};

export default News;