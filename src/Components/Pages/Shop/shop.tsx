import styles from './shop.module.scss';
import { Link } from 'react-router-dom';
import { useApi } from '../../Api/api';

function Shop(){
    const {athletes} = useApi();
    return(
        <>
            <section className={styles.shop}>

                <header className={styles.shopHeader}>

                    <div className={styles.shopShippingNote}>
                        <p className={styles.scrollingText}>free shipping over 99$</p>
                    </div>

                    <div className={styles.shopMainHeading}>
                        <div>turnstyle brand</div>
                        <input type="text" placeholder="What can we help you find?"/>
                    </div>

                    <nav className={styles.shopNavListContainer}>
                        <ul className={styles.shopNavList}>
                            <li>brand 1</li>
                            <li>brand 2</li>
                            <li>brand 3</li>
                            <li>brand 4</li>
                            <li>fighters</li>
                            <li>events</li>
                            <li>apparel</li>
                            <li>tees</li>
                            <li>hats</li>
                            <li>equiptment</li>
                            <li>collectibles</li>
                            <li>sale</li>
                        </ul>
                    </nav>

                    <nav className={styles.shopScrollingBanner}>
                        <p className={styles.scrollingText}>IIGHT BET LOGO -- QUEENS FIGHT CLUB LOGO -- RUMBLE IN THE BRONX LOGO -- OFFICIAL KNUCKLE UP LOGO </p>
                    </nav>

                </header>

                <nav className={styles.shopFilterFighter}>
                    <p>LOGO</p>
                    <ul className={styles.shopFilterList}>
                        {athletes.sort((a,b) => a.name > b.name ? 1 : -1).map(x => (
                            <li
                            className={styles.fighter} 
                            key={x.id}>{x.name}</li>
                        ))}
                    </ul>
                </nav>

                <section className={styles.topPicks}>
                    <div className={styles.topPicksText}>
                        <h2>Top Pick Tees</h2>
                        <p>Rep Your Hood Anywhere</p>
                        <Link to="">Shop Now</Link>
                    </div>
                </section>

                <section className={styles.allTees}>
                    <div className={styles.teesLinks}>
                        <h2>Shop All Tees</h2>
                        <Link to="">view all</Link>
                    </div>
                    <div className={styles.teesListContainer}>
                        <ul>tees list</ul>
                    </div>
                </section>

                <section className={styles.collectibles}>
                    <div className={styles.collectiblesHeading}>
                        <h3>Collector Items</h3>
                        <p>Your Hero, Our Legends</p>
                        <div>
                            <button>pre-order</button>
                            <p>Featuring full-bleed photography, clean design, autograph hits, and collector focused inserts. This release delivers an elevated NYC Collecting Experience.</p>
                        </div>
                    </div>
                </section>

                <section className={styles.trending}>
                    <h2>NYC Buzz</h2>

                    <ul className={styles.trendingList}>

                        <li className={styles.trendCategory}>
                            <Link to="">image</Link>
                            <h6>Name</h6>
                            <p>slogan</p>
                        </li>

                        <li className={styles.trendCategory}>
                            <Link to="">Customs</Link>
                            <h6>Name</h6>
                            <p>Fight your fight</p>
                        </li>

                        <li className={styles.trendCategory}>
                            <Link to="">Pro Gear</Link>
                            <h6>Name</h6>
                            <p>Fight Good, Feel Great</p>
                        </li>

                        <li className={styles.trendCategory}>
                            <Link to="">Official Gloves</Link>
                            <h6>Official Fight Gloves</h6>
                            <p>Be Felt</p>
                        </li>

                    </ul>

                </section>

                <section className={styles.topPicksBranding}>

                    <div className={styles.topFighter}>
                        <div className={styles.topImage}>image</div>
                        <div className={styles.topLink}>
                            <p>X Fighter</p>
                            <button>Shop Now</button>
                        </div>
                    </div>

                    <div className={styles.topBrand}>
                        <div className={styles.topImage}>image</div>
                        <div className={styles.topLink}>
                            <p>X Brand</p>
                            <button>Shop Now</button>
                        </div>
                    </div>

                </section>

                <section className={styles.gear}>
                    <h2>Shop Fighter Gear</h2>
                    <ul className={styles.gearList}>
                        <li className={styles.fighterGear}>
                            <Link to="">image1</Link>
                            <div>
                                <h4>random x fighter</h4>
                                <p>shop official merchandise for x fighter</p>
                            </div>
                        </li>

                        <li className={styles.fighterGear}>
                            <Link to="">image2</Link>
                            <div>
                                <h4>random x fighter</h4>
                                <p>shop official merchandise for x fighter</p>
                            </div>
                        </li>

                        <li className={styles.fighterGear}>
                            <Link to="">image3</Link>
                            <div>
                                <h4>random x fighter</h4>
                                <p>shop official merchandise for x fighter</p>
                            </div>
                        </li>

                        <li className={styles.fighterGear}>
                            <Link to="">image4</Link>
                            <div>
                                <h4>random x fighter</h4>
                                <p>shop official merchandise for x fighter</p>
                            </div>
                        </li>
                    </ul>
                </section>

                <section className={styles.tickets}>

                    <div className={styles.ticketsText}>
                        <p className={styles.names}>Fighters Names</p>
                        <p className={styles.date}>Fight Date</p>
                        <p className={styles.promoter}>event promoters</p>
                    </div>

                    <div className={styles.ticketsButtonContainer}>
                        <button>Buy Tickets</button>
                    </div>

                </section>

                <section className={styles.official}>
                    <h2>Turnstyle Official Gear</h2>
                    <p className={styles.officialStatement}>Represent the sport with authentic merchandise from the Official Turnstyle Store—the exclusive home of premium Turnstyle apparel, collectibles, and event merchandise. Explore curated collections by athlete, event, or official partner, including IIght Bet, Official Knuckle Up, Queens Fight Club, and Rumble in The Bronx. From premium apparel and Fight Kits to accessories and replica championship belts, every item is designed to celebrate the athletes, moments, and culture that define Turnstyle. More than merchandise, every piece represents the passion, intensity, and community behind the sport. Wear the brand, support the movement, and stand alongside the competitors who continue to shape Turnstyle. Welcome to the Official Turnstyle Store—where champions, competitors, and fans unite.</p>
                </section>

            </section>
        </>
    )
};

export default Shop;