import CsNav from "../Navigation/CsNav";
import Head from "next/head";
const CsLayout = (props) =>{
    return (
        <>
        <Head>
            <title>Contentstack</title>
        </Head>
        <div>
            <CsNav/>
            {props.children}
        </div>
        </>
    )
}


export default CsLayout;