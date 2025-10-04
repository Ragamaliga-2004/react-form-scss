import { users } from "./UserData"
import { useParams } from "react-router-dom"

const UserDetailPage = () => {
const {id}=useParams();

const user=users.find((u)=>(u.id===parseInt(id)))
if (!user) return <p>User Id Not Found</p>
  return (
    
    <div>
        <h1>User Detail Page</h1>
        <h2>User Id: {user.id} </h2>
        <h2>User Name:  {user.name}</h2>
        <h2>Age: {user.age} </h2>
    </div>

  )
}

export default UserDetailPage