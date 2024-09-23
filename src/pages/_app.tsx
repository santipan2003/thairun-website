import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";
import theme from "@/styles/theme";
import { Prompt } from "@next/font/google";
import type { AppProps } from "next/app"; 

const prompt = Prompt({
  subsets: ["thai"],
  weight: ["400", "500", "700"], 
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <div className={prompt.className}>
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}
