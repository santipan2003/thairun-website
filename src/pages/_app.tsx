import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";
import "@/styles/CustomSwiper.css";
import "@/styles/custom-swiper.css";
import theme from "@/styles/theme";
import { Sarabun, Roboto } from "@next/font/google"; // Import the additional font
import type { AppProps } from "next/app";

const thaiFont = Sarabun({
  subsets: ["thai"],
  weight: ["400", "500", "700"],
});

const englishFont = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <div className={`${thaiFont.className} ${englishFont.className}`}>
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}
