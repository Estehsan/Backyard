import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import "focus-visible";
import "./../styles/tailwind.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider basePath="custom-route/api/auth" session={session}>
      <Component {...pageProps} />
      <Analytics />
    </SessionProvider>
  );
}

export default MyApp;
