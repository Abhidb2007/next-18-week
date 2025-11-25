"use client";              // <- must be first line

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      hello
      <button onClick={() => setCount((c) => c + 1)}>
        Click me! ({count})
      </button>
    </div>
  );
}
