// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
// import HomeLayout from "../components/Layouts/HomeLayout";
import data from "../data/data";

export default function Home() {
  return (
    <div>
      {/* <HomeLayout/> */}
      <h1>Home Page</h1>
      {
        data.map((company, i)=>{
          return(
            <div key={i}>
              <img src={company.imageUrl} alt=""></img>
              <h1>{company.companyName}</h1>
              <p>{company.shortDescription}</p>
            </div>
          )
        })
      }
      {/* <p>This page will have a short description about all the three companies and the links to go to that particular company</p> */}
    </div>
  )
}

Home.layout = "home";

//nav should have links to raw, cs and sb