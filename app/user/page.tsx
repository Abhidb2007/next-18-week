import axios from "axios"
import {useEffect, useState} from "react"
export default function User(){
    const [loading, setloading]=useState(false);
    const[data,setData]=useState({});
    useEffect(()=>{
        axios.get("https://next-18-week.offline.kirattechnologies.workers.dev/api/v1/users/details")
        .then(response=>{
            setData(response.data);
            
        })

    },[])
    return<div>
        User page
    </div>
}