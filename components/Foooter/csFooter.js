import styles from "../../styles/cs/Footer.module.scss";

function Footer(){
    return(
        <div className={styles["container"]}>
            <div>
                <img src="https://images.contentstack.io/v3/assets/bltc5a09bf374882538/blt954cedac0397edba/5f1a2be1d0350a5e2a2fde71/contentstack-footer-logo.png"></img>
                <p>Social media icons</p>
            </div>
            <div>
                <p>Product</p>
                <ul>
                    <li>Features</li>
                    <li>For IT and Developer</li>
                    <li>For Business</li>
                    <li>Integrations</li>
                    <li>Pricing</li>
                    <li>ROI Calculator</li>
                    <li>Customer Success</li>
                </ul>
            </div>
            <div>
                <p>Users</p>
                <ul>
                    <li>Supported Platforms</li>
                    <li>FAQs</li>
                    <li>Trust</li>
                    <li>System Status</li>
                </ul>
            </div>
            <div>
                <p>Education</p>
                <ul>
                    <li>Customer Resources</li>
                    <li>CMS Guide</li>
                    <li>Blog</li>
                    <li>Docs</li>
                </ul>
            </div>
            <div>
                <p>Company</p>
                <ul>
                    <li>About</li>
                    <li>News</li>
                    <li>Press</li>
                    <li>Careers</li>
                    <li>Become a Partner</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;