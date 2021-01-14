import { Component } from "react";
import axios from "axios";
import styles from "../../styles/Sb.module.scss";
import surfboardBanner from "../../public/surfboard.jpeg"
const url = "https://ashwini-rathod.github.io/Data-surfboard/surfboard.json";

class Surfboard extends Component{
    render(){
        console.log(" Props: ",this.props.surfboard[0].companies);
        return(
            <div>
                <div className={styles["container"]}>
                    <img src={surfboardBanner} className={styles["image"]}></img>
                    <h1>This page will have all the surfboard data</h1>
                </div>
                <div>
                    <h1>Hello</h1>
                    {
                        this.props.surfboard[0].companies.map((company)=>{
                            return(
                            <div>
                                <h1>{company.companyName}</h1>
                                <h4>{company.subtext}</h4>
                                <p>{company.description}</p>
                                <img src={company.imageUrl} alt="company collage"></img>
                            </div>
                        )})
                    }
                </div>
            </div>
        )
    }
}

export const getStaticProps = async () =>{
    let { data } = await axios.get(url);
    // console.log("Data", data);
    return {
        props: {
            surfboard: [...data],
        }
    }
}
Surfboard.layout = "sb"
//using getStaticprops, make an api call to the backend to fetch all the surfboard related data.
// style={{
//     backgroundImage: `url(${surfboardBanner})`,
//     height: "100%",
//     width: "100%"
// }}



export default Surfboard;