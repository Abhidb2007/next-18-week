import axios from 'axios';
import{useEffect,useState} from "react"
export default function User(){
  const[loading,setloading]=useState(true);
  const[userData,setuserData]=useState();
  useEffect(()=>{
    axios.get("https://next-18-week.kirattechnologies.workers.dev/api/v1/user/details")
    .then(response=>{
      setuserData(response.data);
      setloading(false);
    })
  },[])
  if(loading){
    return <div>Loading...</div>
  }
  return(
    <div>
      <h1>User Details</h1>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}