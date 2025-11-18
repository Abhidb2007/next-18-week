import axios from 'axios';
import{useEffect,useState} from "react"
export default async function User(){
  const response =await axios.get("")
  await new Promise(r=>setTimeout(r,5000));
  const data=response.data;
  console.log("hi")
  return <div>
    User Page 
    {data.name}
    {data.email}
  </div>
}