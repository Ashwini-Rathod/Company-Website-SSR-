import {Component } from "react";
// import RawLayout from "../../components/Layouts/RawLayout";
// import RawLayout from "../../components/Layouts/RawLayout";
class RawEngineering extends Component{
    render(){
        return(
            <>
                {/* <RawLayout/> */}
                <h1>This page will have all the raw eng data</h1>
            </>
        )
    }
}

RawEngineering.layout = "raw";

//using getStaticprops, make an api call to the backend to fetch all the raw eng related data.

export default RawEngineering;