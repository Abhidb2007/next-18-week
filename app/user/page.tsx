import axios from "axios";
export default async function User(){
    const res=await axios.get("https://next-18-week.offline.kirattechnologies.workers.dev/api/v1/users/details")
      const data=res.data;
      return<div>
        User page
        {data.name}
        {data.email}
      </div>
}