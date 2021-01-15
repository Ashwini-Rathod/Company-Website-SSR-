import Link from "next/link";
import styles from "../../styles/cs/Header.module.scss";
const CsNav = (props) =>{
    return(
        <div className={styles["main"]}>
        <div className={styles["container"]}>
            <div>
                <img src="https://images.contentstack.io/v3/assets/bltc5a09bf374882538/blt8dc4dd93cd29ae05/5f1a2be13986577a2d5f6736/Contentstack-full-logo-white_800x133.png" className={styles["logo"]}></img>
            </div>
            <nav>
                <ul className={styles["nav-container"]}>
                <li>
                    <Link href="/">
                        <a className={styles["home"]}>Home</a>
                    </Link>
                </li>
                <li>Product</li>
                <li>Education</li>
                <li>Partners</li>
                <li>Company</li>
                <li>Pricing</li>
                <li>Try for free</li>
                {/* <li>
                    <Link href =  "/raw-engineering">
                        <a>Raw engineering</a>
                    </Link>
                </li> */}
                </ul>
                {/* <style jsx>{
                `
                .nav-container{
                    display: flex;
                    justify-content: space-between;
                }
                `
                } */}

                {/* </style> */}
            </nav>
      
        </div>
        {/* <div className={styles["inner-nav"]}>
            <ul>
                <li>Product</li>
                <li>Education</li>
                <li>Partners</li>
                <li>Company</li>
                <li>Pricing</li>
                <li className={styles["try"]}>Try for free</li>
            </ul>
        </div> */}
        <div className={styles["banner-heading"]}>
            <h1>Finally, A Modern Content Management System</h1>
            <p>Contentstack brings business and technology teams together to deliver personalized, omnichannel digital experiences.</p>
        </div>
        <br/>
        <br/>
        <div className={styles["banner-subHeading"]}>
            <p className={styles["try"]}>Try for free</p>
            <br/>
            <br/>
            <p className={styles["request"]}>Request a demo</p>
        </div>
        </div>
    )
}

export default CsNav;