import Head from 'next/head'
import Intro from '../components/Intro'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lxd VYB</title>
        <meta name="description" content="Landing page for music" />
      </Head>
      <Intro/>
  
      
    </div>
  )
}
