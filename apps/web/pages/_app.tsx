import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { globalCss, darkTheme, DesignSystemProvider } from "ui";
import { fetcher } from "@/lib/fetcher";
import { SWRConfig } from "swr";

const globalStyles = globalCss({
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },

  body: {
    margin: 0,
    color: "$hiContrast",
    backgroundColor: "$loContrast",
    fontFamily: "$untitled",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    WebkitTextSizeAdjust: "100%",

    ".dark-theme &": {
      backgroundColor: "$mauve1",
    },
  },

  svg: {
    display: "block",
    verticalAlign: "middle",
  },

  "pre, code": { margin: 0, fontFamily: "$mono" },

  "::selection": {
    backgroundColor: "$violetA5",
    color: "$violet12",
  },

  "#__next": {
    position: "relative",
    zIndex: 0,
  },

  "h1, h2, h3, h4, h5": { fontWeight: 500 },
});

function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <SWRConfig value={{ fetcher }}>
      <DesignSystemProvider>
        <ThemeProvider
          disableTransitionOnChange
          attribute="class"
          value={{ light: "light-theme", dark: darkTheme.className }}
          defaultTheme="system"
        >
          <Component {...pageProps} />
        </ThemeProvider>
      </DesignSystemProvider>
    </SWRConfig>
  );
}

export default App;
