import styles from "../styles/Navbar.module.css"
import Link from "next/link";
const Navbar = () => {
    return (
        <div className={styles.container} >
            <Link href ="/">Lxd VYB</Link>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link href="/music">MUSIC</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/concert">CONCERTS</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/merchandise">MERCHANDISE</Link>
                </li>
                
                <li className={styles.listItem}>
                    <Link href="/contact">CONTACT</Link>
                </li>
                </ul>
  
        
        
        
        
        </div>

    )
}

export default Navbar;
