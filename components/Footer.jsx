import styles from "../styles/Footer.module.css"
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
    return (
        <div className={styles.container}>
          <div className={styles.cardL}>
            <div className={styles.cardItem}>
               © 2022 LIFE X DEATH MUSIC
            </div>
          </div>
          <div className={styles.cardS}>
            <div className={styles.cardItem}>

              <a href="https://www.facebook.com/lxdvyb" passHref>
              <span className={styles.linkText}>FB</span>
              <Image src="/img/link.png"
              alt =""
              width="10px"
              height="10px"/>
              </a>
              <a href="https://www.instagram.com/lxdvyb/" passHref>
              <span className={styles.linkText}>IG</span>
              <Image src="/img/link.png"
              alt =""
              width="10px"
              height="10px"/>
              </a>
              <a href="https://www.youtube.com/channel/UCeVBC5IcYghA9iMggLE_C2w" passHref>
              <span className={styles.linkText}>YT</span>
              <Image src="/img/link.png"
              alt =""
              width="10px"
              height="10px"/>
              </a>
              </div>
          </div>
          </div>
    )
}

export default  Footer;
