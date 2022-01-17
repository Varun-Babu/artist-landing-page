 import styles from "../styles/contact.module.css"
 
 const contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>GET IN TOUCH</h1>
            <form className={styles.form}>
                <input className={styles.inputS} placeholder="Name"/>
                <input className={styles.inputS} placeholder="Phone"/>
                <input className={styles.inputL} placeholder="Email"/>
                <input className={styles.inputL} placeholder="Subject"/>
                <textarea className={styles.textarea} placeholder="Message" rows ={6}/>
                <button className={styles.button}>SUBMIT</button>
            </form>
            
        </div>
    )
}

export default contact;
