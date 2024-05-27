import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/atlas", "/form", "/about", 
  "/atlas/conteudos/hematopoese"
  , '/atlas/conteudos/eritrocitos'
  , '/atlas/conteudos/leucocitos'
  , '/atlas/conteudos/plaquetas'
  , '/atlas/conteudos/alteracoes'
  ,"/api/webhooks/stripe"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
