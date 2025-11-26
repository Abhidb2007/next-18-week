
import axios from "axios"
export default function(){
    return <div>
        Sign in page <br></br>
        <input></input>
        <input></input>
        <button onClick={async()=>{
            const res=await axios.post("http://localhost:3000/api/signin",{
                username: "aasda",
                password: "Esdasdas"
            })
            localStorage.setItem("token",res.data.token)
        }}>Signin</button>
    </div>
}