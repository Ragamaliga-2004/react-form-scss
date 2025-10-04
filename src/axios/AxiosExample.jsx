import { useState,useEffect } from "react";
import axios from "axios";


const AxiosExample = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.comdos")
      .then((response)=>{
        setData(response.data)
        setLoading(false)

      })
      .catch((error)=>{
        setError(error)
        setLoading(false)

      })
    
      
    }, [])
    
    if (loading) return <p>Loading</p>
    if (error) return <p>{error.message}</p>
    

  return (
    <div>
        <h1>Axios</h1>
        <ul>
            {data.map((item,index)=>(
                <li key={index}>{item.title}</li>
            ))}
        </ul>

    </div>
  )
}

export default AxiosExample