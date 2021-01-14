import HomeNav from "../Navigation/HomeNav";
import Head from "next/head";
const HomeLayout = (props) =>{
    return (
        <>
        <Head>
            <title>Home Page</title>
        </Head>
        <div>
            <HomeNav/>
            {props.children}
        </div>
        </>
    )
}

export default HomeLayout;