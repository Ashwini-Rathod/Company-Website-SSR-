import styles from "../../styles/surfboard/Footer.module.scss";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

function Footer (){
    return(
        <>
        <hr className={styles["hr"]}/>
        <br/>
        <br/>
        <div className={styles["container"]}>
            <div className={styles["logo"]}>
                <img src="https://images.contentstack.io/v3/assets/blt137524604e62b5cb/blte814c52ab7983cb7/5ed94783ff1cb239b9500ed0/logo@3x.svg" alt="surfboard logo"></img> 
            </div>
            <div>
                <p className={styles["p-tag"]}>Portfolio</p>
                <p className={styles["p-tag"]}>Academy</p>
                <p className={styles["p-tag"]}>Events</p>
            </div>
            <div>
                <p className={styles["p-tag"]}>Gallery</p>
                <p className={styles["p-tag"]}>e-Certificates</p>
                <p className={styles["p-tag"]}>Contact Us</p>
            </div>
            <div>
                <p className={styles["p-tag"]}> info@surfboardadventures.com</p>
            </div>
            <div>
                 <SocialIcon network="facebook" style={{ height: 25, width: 25, margin: "3px"}} />
                 <SocialIcon network="linkedin" style={{ height: 25, width: 25, margin: "3px"}} />     
                 <SocialIcon network="twitter" style={{ height: 25, width: 25, margin: "3px"}} />  
                 <SocialIcon network="youtube" style={{ height: 25, width: 25, margin: "3px"}} />      
                 <SocialIcon network="instagram" style={{ height: 25, width: 25, margin: "3px"}} />   
            </div>
        </div>
        <br/>
        <br/>
        <hr className={styles["hr"]}/>
        <div className={styles["copyright"]}>
            <p>Copyright © 2020 Surfboard Ventures. All Rights Reserved.</p>
        </div>
        <br/>
        </>
    )
}

export default Footer;