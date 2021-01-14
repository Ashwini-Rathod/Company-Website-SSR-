import SbNav from "../Navigation/SbNav";
import Head from "next/head";
const SbLayout = (props) =>{
    return (
        <>
        <Head>
            <title>Surfboard</title>
        </Head>
        <div>
            <SbNav/>
            {props.children}
        </div>
        </>
    )
}

export default SbLayout;