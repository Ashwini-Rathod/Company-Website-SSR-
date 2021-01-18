import styles from "../../styles/cs/Footer.module.scss";
import { SocialIcon } from "react-social-icons";

function Footer() {
    return (
        <>
            <div className={styles["container"]}>
                <div className={styles["logo-sm"]}>
                    <div>
                        <img src="https://images.contentstack.io/v3/assets/bltc5a09bf374882538/blt954cedac0397edba/5f1a2be1d0350a5e2a2fde71/contentstack-footer-logo.png" className={styles["logo"]}></img>
                    </div>
                    <div>
                        <SocialIcon network="twitter" style={{ height: 30, width: 35 }} fgColor="black" bgColor="transparent" className={styles["social-icons"]} />
                        <SocialIcon network="linkedin" style={{ height: 30, width: 35 }} fgColor="black" bgColor="transparent" className={styles["social-icons"]} />
                        <SocialIcon network="facebook" style={{ height: 30, width: 35 }} fgColor="black" bgColor="transparent" className={styles["social-icons"]} />
                        <SocialIcon network="youtube" style={{ height: 30, width: 35 }} fgColor="black" bgColor="transparent" className={styles["social-icons"]} />
                        <SocialIcon network="github" style={{ height: 30, width: 35 }} fgColor="black" bgColor="transparent" className={styles["social-icons"]} />
                    </div>
                </div>
                <div className={styles["product"]}>
                    <h3>Product</h3>
                    <p>Features</p>
                    <p>For IT and Developer</p>
                    <p>For Business</p>
                    <p>Integrations</p>
                    <p>Pricing</p>
                    <p>ROI Calculator</p>
                    <p>Customer Success</p>
                </div>
                <div className={styles["product"]}>
                    <h3>Users</h3>
                    <p>Supported Platforms</p>
                    <p>FAQs</p>
                    <p>Trust</p>
                    <p>System Status</p>
                </div>
                <div className={styles["product"]}>
                    <h3>Education</h3>
                    <p>Customer Resources</p>
                    <p>CMS Guide</p>
                    <p>Blog</p>
                    <p>Docs</p>
                </div>
                <div className={styles["product"]}>
                    <h3>Company</h3>
                    <p>About</p>
                    <p>News</p>
                    <p>Press</p>
                    <p>Careers</p>
                    <p>Become a Partner</p>
                    <p>Contact Us</p>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Footer;