import styles from './root.module.scss';

import Header from '../Header/header';
import { Outlet } from "react-router-dom";

function Root(){
    return(
        <section className={styles.root}>
            <Header/>
            <Outlet/>
        </section>
    )
};

export default Root;