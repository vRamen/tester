import { NextResponse } from "next/server";

export function middleware(request) {
  const hostname = request.headers.get("host") || "";

  const mapping = {
    "kamingundang.biz.id": "/template1",
    "weddify.biz.id": "/template2",
  };

  const templatePath = mapping[hostname.toLowerCase()] || "/";

  const url = request.nextUrl.clone();
  url.pathname = templatePath + url.pathname;

  return NextResponse.rewrite(url);
}
