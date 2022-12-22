import Head from 'next/head'
import Navbar from '../Navbar'
import styles from '../../styles/Home.module.css'
import React, { FC, ReactNode } from "react";

type Props = { children: ReactNode, name:string}

 const MainLaouts: FC<Props> = ({children, name}) => {

    return(
        <div className={styles.container}>
            <Head>
                <title>Home - fernando</title>
                <meta name="Description" content={`${name} page`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar/>
            {children}
        </div>
    )
}

export default MainLaouts;