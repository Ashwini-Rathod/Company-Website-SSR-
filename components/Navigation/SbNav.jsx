import Link from "next/link";
import styles from "../Navigation.module.scss";
const SbNav = (props) =>{
    return(
        <div className={styles["nav-div"]}>
            <div className={styles["nav-logo"]}>
                <img src="https://images.contentstack.io/v3/assets/blt137524604e62b5cb/blte814c52ab7983cb7/5ed94783ff1cb239b9500ed0/logo@3x.svg" alt="Surfoard logo"></img>
            </div>
            <nav>
                <ul className={styles["nav-container"]}>
                <li>
                    <Link href="/">
                        <a className={styles["nav-links"]}>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href = "/raw-engineering">
                        <a className={styles["nav-links"]}>Raw Engineering</a>
                    </Link>
                </li>
                <li>
                    <Link href = "/contentstack">
                        <a className={styles["nav-links"]}>Contentstack</a>
                    </Link>
                </li>
                </ul>
                <style jsx>{
                `
                .nav-container{
                    display: flex;
                    justify-content: space-between;
                }
                `
                }

                </style>
            </nav>
        </div>
    )
}

export default SbNav;