import { NextResponse } from "next/server";

//http://localhost:4000/api/
export function GET() {
  return NextResponse.json({
    message: "Next.js API v1.0.0 running...",
  });
}
