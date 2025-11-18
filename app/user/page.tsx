"use client";

import axios from 'axios';
import { useEffect, useState } from "react";

export default function User() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/user/details")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div>
      User Page <br />
      {data?.name} <br />
      {data?.email}
    </div>
  );
}
