import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="bg-secondary-200">
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        height={2}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </main>
  );
}
