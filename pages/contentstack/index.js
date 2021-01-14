import { Component } from "react";
// import CsLayout from "../../components/Layouts/CsLayout";
import Link from "next/link";
class ContentStack extends Component{
    render(){
        return(
            <>
                {/* <CsLayout> */}
                <h1>This page will have all the ContentStack data</h1>
                <Link href="/contentstack/test">
                    Test
                </Link>
                {/* </CsLayout> */}

            </>
        )
    }
}

ContentStack.layout = "cs";

// ContentStack.Layout = CsLayout;

//using getStaticprops, make an api call to the backend to fetch all the contentStack related data.

export default ContentStack;