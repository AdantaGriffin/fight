import styles from './home.module.scss';

import TopStories from '../TopStories/topStories';
import RecentNext from '../RecentNext/recentNext';
import FeaturedContent from '../FeaturedContent/featuredContent';

function Home(){
    return(
        <>
            <section className={styles.home}>
                <TopStories/>
                <RecentNext/>
                <FeaturedContent/>
                <div className={styles.homeClear}></div>
            </section>
        </>
    )
};

export default Home;