import { Response, serve } from "https://deno.land/std/http/server.ts";
import { setCookie } from "https://deno.land/std/http/cookie.ts";

const s = serve({ port: 8000 });

for await (const req of s) {
  const res: Response = {};
  res.headers = new Headers();
  setCookie(res, { name: "cookie-1", value: "test1" });
  setCookie(res, { name: "cookie-2", value: "maxAge: 100000", maxAge: 100000 });
  setCookie(res, { name: "cookie-3", value: "httpOnly: true", httpOnly: true });
  setCookie(res, { name: "cookie-4", value: "domain: kasaharu.deno.sandbox", domain: "kasaharu.deno.sandbox" });
  setCookie(res, { name: "cookie-5", value: "sameSite: None", sameSite: "None" });
  setCookie(res, { name: "cookie-6", value: "sameSite: Strict", sameSite: "Strict" });
  setCookie(res, { name: "cookie-7", value: "sameSite: Lax", sameSite: "Lax" });

  req.respond({ headers: res.headers, body: "Hello World\n" });
}
