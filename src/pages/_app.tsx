import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <main className="bg-slate-200">
        <NextNProgress
          color="#29D"
          startPosition={0.3}
          height={2}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
