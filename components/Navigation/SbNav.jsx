import Link from "next/link";
import styles from "../../styles/surfboard/Header.module.scss";
const SbNav = (props) =>{
    return(
        <div>
            <div className={styles["container"]}>
                <div className={styles["nav-div"]}>
                    <div className={styles["nav-logo"]}>
                        <img src="https://images.contentstack.io/v3/assets/blt137524604e62b5cb/blte814c52ab7983cb7/5ed94783ff1cb239b9500ed0/logo@3x.svg" alt="Surfoard logo" className={styles["sb-logo"]}></img>
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
                    </nav>
                </div>
                <div className={styles["banner-content"]}>
                    <h1 className={styles["banner-heading"]}>The Entrepreneur’s Surfboard</h1>
                    <p className={styles["banner-sub"]}>Entrepreneurship isn’t just about the end game. It’s about the journey. There are ups and downs. Your resilience stands tall against the roughest seas. Sometimes you prevail. Sometimes you wipe out. We are here to help remarkable entrepreneurs to “just keep paddling” and provide the courage they need to ride the highest of waves.</p>
                </div>
          
            </div>
        </div>
    )
}

export default SbNav;