import { Component } from "react";
import axios from "axios";
import Footer from "../../components/Foooter/csFooter";
import styles from "../../styles/cs/Cs.module.scss";
const url = "https://ashwini-rathod.github.io/Data-surfboard/contentstack.json"

class ContentStack extends Component {
    render() {
        let cs = this.props.cs[0];
        return (
            <div>
                <div className={styles["container"]}>
                    <div className={styles["why-choose-cs-main"]}>
                        <h1>Why choose Contentstack</h1>
                    </div>
                    <div className={styles["why-choose-cs"]}>

                        {
                            cs.whyChooseContentstack.map((item, i) => {
                                return (
                                    <div key={i} className={styles["cs-div"]}>
                                        <h1>{item.title}</h1>
                                        <p>{item.content}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles["use"]}>
                    <div className={styles["for-it"]}>
                        {
                            cs.forIT.map((item, i) => {
                                return (
                                    <div key={i} className={styles["content"]}>
                                        <h1>{item.title}</h1>
                                        <p>{item.content}</p>
                                        <button className={styles["btn"]}>Learn More</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles["for-business"]}>
                        {
                            cs.forBusiness.map((item, i) => {
                                return (
                                    <div key={i} className={styles["content"]}>
                                        <h1>{item.title}</h1>
                                        <p>{item.content}</p>
                                        <button className={styles["btn"]}>Learn More</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles["container"]}>
                    <div className={styles["why-choose-cs-main"]}>
                        <h1>Features</h1>
                    </div>
                    <div className={styles["features"]}>
                        {
                            cs.features.map((item, i) => {
                                return (
                                    <div key={i} className={styles["feature"]}>
                                        <h1>{item.title}</h1>
                                        <p>{item.content}</p>
                                        <img src={item.image} alt=""></img>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles["btn-div"]}>
                        <button className={styles["features-btn"]}>More Features</button>
                    </div>
                </div>
                <div className={styles["container"]}>
                    <div className={styles["try-for-free"]}>
                        <div className={styles["try-container"]}>
                            <h1>TRY IT TO BELIEVE IT</h1>
                            <button className={styles["request"]}>REQUEST A DEMO</button>
                            <button className={styles["try"]}>TRY FOR FREE</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

ContentStack.layout = "cs";

export const getStaticProps = async () => {
    let { data } = await axios.get(url);
    return {
        props: {
            cs: [...data],
        }
    }
}

export default ContentStack;