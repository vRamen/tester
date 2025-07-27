export function middleware(request) {
  const hostname = request.headers.get("host") || "";

  const mapping = {
    "kamingundang.biz.id": "/template1/index.html",
    "tester-beige.vercel.app": "/template2/index.html"
  };

  const destination = mapping[hostname.toLowerCase()] || "/";

  return Response.rewrite(new URL(destination, request.url));
}
