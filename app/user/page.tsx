"use client";

import axios from 'axios';
import { useEffect, useState } from "react";

export default function User() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://example.com/api/user")
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
