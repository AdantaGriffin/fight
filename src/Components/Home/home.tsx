import styles from './home.module.scss';

import TopStories from '../TopStories/topStories';
import RecentNext from '../RecentNext/recentNext';
import FeaturedContent from '../FeaturedContent/featuredContent';

function Home(){
    return(
        <>
            <section className={styles.homes}>
                <TopStories/>
                <RecentNext/>
                <FeaturedContent/>
            </section>
        </>
    )
};

export default Home;