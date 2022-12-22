import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React, { FC } from "react";

type Props = { name:string}

 const MainContent: FC<Props> = ({name}) => {
    
    return(
        <main className={styles.main}>
        <h1>{name}</h1>
        {name === 'home' ? 
        <div>
            <h1 className={styles.title}>
            Ir al <Link href="/about">about</Link>
            </h1>
            <h1 className={styles.title}>
            Ir al <Link href="/contact">contact</Link>
            </h1> 
            <h1 className={styles.title}>
            Ir al <Link href="/contact">pricing</Link>
            </h1> 
            <p className={styles.description}>
                Get started by editing{' '}
                <code className={styles.code}>pages/index.js</code>
            </p>
        </div>
        : 
            <div>
                <h1 className={styles.title}>
                Ir al <Link href="/">home</Link>
                </h1>
                <p className={styles.description}>
                Get started by editing{' '}
                <code className={styles.code}>{`pages/${name}.js`}</code>
                </p>
            </div>
        }

      </main>
    )
}

export default MainContent;