// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";
import theme from "@/styles/theme";
import { Prompt } from "@next/font/google";

const prompt = Prompt({
  subsets: ["thai"],
  weight: ["400", "500", "700"], // Adjust weights if necessary
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <div className={prompt.className}>
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}
