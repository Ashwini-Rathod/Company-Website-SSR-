import {Component } from "react";
import axios from "axios";
import Footer from "../../components/Foooter/rawFooter";
import styles from "../../styles/raw/Raw.module.scss";
const url = "https://ashwini-rathod.github.io/Data-surfboard/raw-engineering.json";

class RawEngineering extends Component{
    render(){
        return(
            <>
                <div className={styles["banner-main"]}>
                    <div className={styles["banner"]}>
                        <h1 className={styles["banner-heading"]}>{this.props.raw[0].title}</h1>
                        <p className={styles["banner-sub"]}>{this.props.raw[0].subtitle}</p>
                    </div>
                </div>
                <div className={styles["short-intro"]}>
                    <p>{this.props.raw[0].shortIntro}</p>
                    <div className={styles["btn-div"]}>
                        <button className={styles["btn"]}>Learn More</button>
                    </div>
                </div>
                <br/>
                <hr/>
                <br/>
                <br/>
                <br/>
                <div>
                    <h2 className={styles["title"]}> <hr className={styles["hr-title"]}/>WHAT WE DO <hr className={styles["hr-title"]}/></h2>
                    {
                        this.props.raw[0].whatWeDo.map((item, i)=>{
                            return (
                                <div key={i} className={styles["what-we-do"]}>
                                    <div className={styles["wwd-image"]}>
                                        <img src={item.imageUrl}></img>
                                    </div>
                                    <div className={styles["wwd-content"]}>
                                        <h1 className={styles["wwd-heading"]}>{item.heading}</h1>
                                        <p>{item.subHeading}</p>
                                        <p className={styles["more"]}>More</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <br/>
                <hr/>
                <br/>
                <br/>
                <br/>
                <div>
                    <h2 className={styles["title"]}> <hr className={styles["hr-title"]}/>LATEST WORK<hr className={styles["hr-title"]}/></h2>
                    <div className={styles["latest-work"]}>
                        {
                            this.props.raw[0].latestWork.map((item, i)=>{
                                return(
                                    <div key={i} className={styles["lw-container"]}>
                                        <img src={item.imageUrl} className={styles["lw-image"]}></img>
                                        <p className={styles["lw-title"]}>{item.title}</p>
                                        <h3 className={styles["lw-cs"]}>{item.caseStudyHeading}</h3>
                                        <p className={styles["view-more"]}>View Case Study</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <br/>
                <hr/>
                <br/>
                <br/>
                <br/>
                <div>
                    <h2 className={styles["title"]}> <hr className={styles["hr-title"]}/>TESTIMONIALS<hr className={styles["hr-title"]}/></h2>
                    <div className={styles["testimonials"]}>
                        {
                            this.props.raw[0].testimonials.map((item, i)=>{
                                return(
                                    <div key={i} className={styles["testimonials-div"]}>
                                        <img src = {item.imageUrl} className={styles["test-img"]}></img>
                                        <h3>{item.name}</h3>
                                        <h5>{item.companyName}</h5>
                                        <p>{`"${item.message}"`}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <br/>
                <hr/>
                <br/>
                <br/>
                <br/>
                <Footer/>
            </>
        )
    }
}

RawEngineering.layout = "raw";

export const getStaticProps = async () =>{
    let { data } = await axios.get(url);
    return {
        props: {
            raw: [...data],
        }
    }
}

export default RawEngineering;