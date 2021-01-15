import { Component } from "react";
import axios from "axios";
import Footer from "../../components/Foooter/csFooter";
// import { fixed } from "*.jpg";
const url = "https://ashwini-rathod.github.io/Data-surfboard/contentstack.json"

class ContentStack extends Component{
    render(){
        let cs= this.props.cs[0];
        return(
            <div>
                {/* <div 
                    // style={{
                    //     backgroundImage: "url('https://images.contentstack.io/v3/assets/bltc5a09bf374882538/blt0eac3686a06a4a3f/5f1a2be2ecbff322d09554d6/hero-carousel-1.jpg')",
                    //     backgroundRepeat: "no-repeat",
                    //     // backgroundAttachment: "fixed",
                    //     backgroundPosition: "center",
                    //     height: "120vh"
                    // }}
                >
                    <h1>{cs.heading}</h1>
                    <h3>{cs.subHeading}</h3>
                </div> */}
                <div>
                    <h1>Why choose Contentstack</h1>
                    {
                        cs.whyChooseContentstack.map((item, i)=>{
                            return(
                                <div key={i}>
                                    <h1>{item.title}</h1>
                                    <p>{item.content}</p>
                                </div>
                            )
                        })
                    }
                </div>
               <div>
                   <div>
                        {
                            cs.forIT.map((item, i)=>{
                                return(
                                    <div key={i}> 
                                        <h1>{item.title}</h1>
                                        <p>{item.content}</p>
                                    </div>
                                )
                            })
                        }
                   </div>
                   <div>
                        {
                            cs.forBusiness.map((item, i)=>{
                                return(
                                    <div key={i}>
                                        <h1>{item.title}</h1>
                                        <p>{item.content}</p>
                                    </div>
                                )
                            })
                        }
                   </div>
               </div>
               <div>
                   {
                       cs.features.map((item, i)=>{
                           return(
                               <div key={i}>
                                    <h1>{item.title}</h1>
                                    <p>{item.content}</p>
                               </div>
                           )
                       })
                   }
               </div>
               <div>
                   <img src="https://images.contentstack.io/v3/assets/bltc5a09bf374882538/blta8ec620b53524f45/5f1a2bd31db8ad781814787d/download.jpg"></img>
               </div>
               <Footer/>
            </div>
        )
    }
}

ContentStack.layout = "cs";

export const getStaticProps = async () =>{
    let { data } = await axios.get(url);
    return {
        props: {
            cs: [...data],
        }
    }
}

export default ContentStack;