import styles from './root.module.scss';

import Header from '../Header/header';
import { Outlet } from "react-router-dom";
import Footer from '../Footer/footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//global scroll to top function
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto"
        });
    }, [pathname]);

    return null;
}

function Root(){

    return(
        <section className={styles.root}>
            <ScrollToTop />
            <Header/>
            <div className={styles.outlet}>
                <Outlet/>
            </div>
            <Footer/>
        </section>
    )
};

export default Root;