import React from "react"
import './App.css';
import Header from "./Header";
import Destination from "./Desination";
import Data from "./Data";

function Container(){
  const dataItems = Data.map((data) =>{
    return(
      <Destination 
      {...data}
      />
    )
  })
  
  return(
    <Container className ="container" > 
      <Header/>
      {dataItems}
    </Container>
  )
}
export default Container;