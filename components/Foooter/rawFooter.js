import styles from "../../styles/raw/Footer.module.scss";
import { SocialIcon } from "react-social-icons";

function Footer () {
    return(
        <div className={styles["footer"]}>
            <div className={styles["head"]}>
                <h1>Ready to get started on your next project?</h1>
                <button className={styles["btn"]}>Get in touch</button>
            </div>
            <div className={styles["container"]}>
                <div>
                    <div className={styles["privacy-div"]}> 
                        <div><p>Privacy</p></div>
                        <div><p>Backend Terms of use</p></div>   
                    </div>
                    <div className={styles["copyright"]}>
                        <p>Copyright © 2021 Raw Engineering LLC. All Rights Reserved.</p>
                        <img src="https://www.raweng.com/v3/assets/bltaacb6b0c9b693c2d/blt67d1684f23bec105/5e31575101e4f445b22f4bde/soc_logo.png?width=100"></img>
                    </div>
                </div>
                <div>
                    <SocialIcon network="twitter" style={{ height: 25, width: 25, margin: "10px"}} />  
                    <SocialIcon network="linkedin" style={{ height: 25, width: 25, margin: "10px"}} />     
                    <SocialIcon network="facebook" style={{ height: 25, width: 25, margin: "10px"}} />    
                    <SocialIcon network="instagram" style={{ height: 25, width: 25, margin: "10px"}} /> 
                </div>
            </div>
        </div>
    )
}

export default Footer;