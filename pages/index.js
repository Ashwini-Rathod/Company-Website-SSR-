import { Component } from "react";
import axios from "axios";
import styles from "../styles/surfboard/Sb.module.scss";
import Footer from "../components/Foooter/sbFooter";
const url = "https://ashwini-rathod.github.io/Data-surfboard/surfboard.json";

class Surfboard extends Component {
    render() {
        return (
            <div>

                <div className={styles["main-container"]}>
                    <div className={styles["portfolio-main"]}>
                        <h1 className={styles["portfolio-h1"]}>Our Portfolio Companies</h1>
                        <div className={styles["company-container"]}>
                            <div>
                                <img src={this.props.surfboard[0].portfolioImage} className={styles["portfolio-image"]}></img>
                            </div>
                            <div>
                                {
                                    this.props.surfboard[0].companies.map((company, i) => {
                                        return (
                                            <div key={i}>
                                                <h2 className={styles["company-heading"]}>{company.companyName}</h2>
                                                <p className={styles["company-content"]}>{company.description}</p>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={styles["btn-div"]}>
                            <button className={styles["btn"]}>Learn More</button>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className={styles["team-main"]}>
                        <h1 className={styles["team-h1"]}>Team</h1>
                        <div>
                            {
                                this.props.surfboard[0].team.map((member, i) => {
                                    return (
                                        <div key={i} className={styles["team-container"]}>
                                            <div className={styles["team-image-div"]}>
                                                <img src={member.image} className={styles["team-image"]}></img>
                                            </div>
                                            <div className={styles["team-content"]}>
                                                <h1>{member.name}</h1>
                                                <p>{member.message}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className={styles["philosophy-main"]}>
                        <h1 className={styles["philosophy-h1"]}>Our Philosophy</h1>
                        <div className={styles["philosophy-container"]}>
                            {
                                this.props.surfboard[0].philosophy.map((item, i) => {
                                    return (
                                        <div key={i}>
                                            <div className={styles["philosophy-content"]}>
                                                <img src={item.image} className={styles["philosophy-img"]}></img>
                                                <h2 className={styles["philosophy-h2"]}>{item.title}</h2>
                                                <p>{item.content}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <Footer />
            </div>
        )
    }
}

export const getStaticProps = async () => {
    let { data } = await axios.get(url);
    return {
        props: {
            surfboard: [...data],
        }
    }
}
Surfboard.layout = "sb"

export default Surfboard;