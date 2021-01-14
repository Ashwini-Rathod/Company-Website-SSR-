import Link from "next/link";

const RawNav = (props) =>{
    return(
        <nav className="nav-container">
            <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href =  "/contentstack">
                    <a>Contentstack</a>
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

export default RawNav;