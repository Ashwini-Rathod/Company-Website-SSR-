import Link from "next/link";
import styles from "../Navigation.module.scss";

const HomeNav = (props) =>{
    return(
        <div className={styles["nav-div"]}>
            <div>
                <h1>logo</h1>
            </div>
            <div>
                <nav>
                    <ul className={styles["nav-container"]} >
                        <li>
                            <Link href="/raw-engineering">
                                <a>Raw engineering</a>
                            </Link>
                        </li>
                        <li>
                            <Link href =  "/contentstack">
                                <a>Contentstack</a>
                            </Link>
                        </li>
                        <li>
                            <Link href = "/surfboard">
                                <a>Surfboard</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        
        </div>
    )
}

export default HomeNav;