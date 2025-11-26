// ✅ Correct - route.ts in app/api/auth/[...module]/route.ts
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  // your logic here
  return Response.json({ message: "hi there" });
}

export async function POST(req: NextRequest) {
  // handle POST here
  const body = await req.json();
  return Response.json({ message: "POST works", body });
}
