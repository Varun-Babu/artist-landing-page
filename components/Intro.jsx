import styles from "../styles/Intro.module.css"
import Image from "next/image";
const Intro = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.Title}>
                    LIFE
                    <span className={styles.brand} > X </span>
                     DEATH VIBE</h1> 
                <p className={styles.desc}> Lxd VYB is an Indian Bilingual rapper emerging from Kerala Tvm 
                starting his music career in the year 2018 he released most his his songs through youtube
                    </p>
                <button className={styles.button}>
                DISCOVER
                    </button>         
            </div>
            <div className={styles.card}> 
            <Image src="/img/image.png" 
            width="100%"
            height="100%"
            layout="fill"
            />
            </div>
            
        </div>
    )
}
export default Intro;

