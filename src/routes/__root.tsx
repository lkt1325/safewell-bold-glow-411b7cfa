import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold uppercase tracking-wider text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground btn-glow"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Safewell Security Services — Your Safety, Our Priority" },
      { name: "description", content: "Professional security solutions: manned guarding, CCTV, VIP protection, event & industrial security. Trained personnel, 24/7." },
      { name: "author", content: "Safewell Security Services" },
      { property: "og:title", content: "Safewell Security Services — Your Safety, Our Priority" },
      { property: "og:description", content: "Professional security solutions: manned guarding, CCTV, VIP protection, event & industrial security. Trained personnel, 24/7." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0A0A0A" },
      { name: "twitter:title", content: "Safewell Security Services — Your Safety, Our Priority" },
      { name: "twitter:description", content: "Professional security solutions: manned guarding, CCTV, VIP protection, event & industrial security. Trained personnel, 24/7." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c780afb1-2e19-4cc7-a8fa-2958b98a9c3c/id-preview-ada30172--2513b28a-2652-4d15-8a6a-1b4b77f5a122.lovable.app-1777288635094.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c780afb1-2e19-4cc7-a8fa-2958b98a9c3c/id-preview-ada30172--2513b28a-2652-4d15-8a6a-1b4b77f5a122.lovable.app-1777288635094.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
