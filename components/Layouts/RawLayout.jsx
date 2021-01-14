import RawNav from "../Navigation/RawNav";
import Head from "next/head";
const RawLayout = (props) =>{
    return (
        <>
         <Head>
            <title>Raw Engineering</title>
        </Head>
        <div>
            <RawNav/>
            {props.children}
        </div>
        </>
    )
}

export default RawLayout;