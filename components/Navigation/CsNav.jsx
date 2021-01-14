import Link from "next/link";

const CsNav = (props) =>{
    console.log(props);
    return(
        <nav className="nav-container">
            <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href =  "/raw-engineering">
                    <a>Raw engineering</a>
                </Link>
            </li>
            <li>
                <Link href = "/surfboard">
                    <a>Surfboard</a>
                </Link>
            </li>
            </ul>
            <style jsx>{
               `
               .nav-container{
                   display: flex;
                   justify-content: space-between;
               }
               `
            }

            </style>
        </nav>
    )
}

export default CsNav;