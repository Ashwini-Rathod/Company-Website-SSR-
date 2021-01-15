import Link from "next/link";
import styles from "../../styles/raw/Header.module.scss";
import logo from "../../public/raw-englogo.png";

const RawNav = (props) =>{
    return(
        <div className={styles["nav-div"]}>
            <div className={styles["nav-logo"]}>
                <img src={logo} className={styles["logo"]}></img>
            </div>
            <nav className="nav-container">
                <ul className={styles["nav-container"]}>
                <li>
                    <Link href="/">
                        <a className={styles["nav-links"]}>Home</a>
                    </Link>
                </li>
                {/* <li>
                    <Link href =  "/contentstack">
                        <a className={styles["nav-links"]}>Contentstack</a>
                    </Link>
                </li> */}
                {/* <li>
                    <Link href = "/surfboard">
                        <a>Surfboard</a>
                    </Link>
                </li> */}
                </ul>
            </nav>
        </div>
    )
}

export default RawNav;