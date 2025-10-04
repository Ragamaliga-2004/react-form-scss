import axios from "axios";
import { useState,useEffect } from "react";


const AxiosPost = () => {

  const [sendData, setSendData] = useState({})
  const url= "https://jsonplaceholder.typicode.com/posts/1"
  const record= {
    title: "Abdul Kalam",
    body: "Wings of Fire",
    userId:50
  }
  
 useEffect(() => {
    axios.put(url,record)
  .then((response)=>{
    setSendData(response.data);
    console.log("Data posted",response.data);
    

  })
  .catch((error)=>{
    console.log("error message", error);
    
  })

 }, [])
 

  return (
    <div></div>
  )
}

export default AxiosPost