import { users } from "./UserData"  
import { Link } from "react-router-dom"

const UserPage = () => {
  return (
    <div>
        <h1>This is User list Page</h1>
        <Link to="/hiiraga">Hii Raga</Link>
        <ul>
            {users.map((user)=>(
                <li key={user.id}>
                    <Link to={`users/${user.id}`}>{user.name}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default UserPage