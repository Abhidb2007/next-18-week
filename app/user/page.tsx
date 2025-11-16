"use client";
import axios from "axios"
import {useEffect, useState} from "react"
export default function User(){
    const [loading, setloading]=useState(true);
    const[data,setData]=useState();
    useEffect(()=>{
        axios.get("https://next-18-week.offline.kirattechnologies.workers.dev/api/v1/users/details")
        .then(response=>{
            setData(response.data);

        })

    },[])
    if(loading){
        return<div>
            loading...
        </div>

    }
    return<div>
        User page
        {data.name}
        {data.email}
       
    </div>
}