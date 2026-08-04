import styles from './connect.module.scss';

function Connect(){
    return(
        <>
            <section className={styles.connect}>
                <header className={styles.connectHeader}>
                    <h6>PAGE</h6>
                    <h2>GET THE TURNSTYLE NEWSLETTER</h2>
                </header>

                <form className={styles.connectForm}>
                    <h2>TURNSTYLE</h2>
                    <div className={styles.formText}>
                        <p>Welcome to NYC's Caziest Ride</p>
                        <p>Join the official TurnStyle email list</p>
                        <p>Join our corner and get fight-night highlights, early access to tickets, exclusive offers, and more- all delivered straight to your inbox.</p>
                        <p>Sign up now and stay fight ready.</p>
                    </div>

                    <div className={styles.formInputs}>
                        <input type="text" placeholder="First Name *"/>
                        <input type="text" placeholder="Last Name *"/>
                        <input type="text" placeholder="Email *"/>
                        <select>
                            <option>Select Your Neighbohood</option>
                            <option>Brooklyn</option>
                            <option>Bronx</option>
                            <option>Manhattan</option>
                            <option>Queens</option>
                            <option>Staten Island</option>
                            <option>Long Island</option>
                        </select>
                    </div>

                    <button className={styles.button}>Submit</button>
                </form>
            </section>
        </>
    )
};

export default Connect;