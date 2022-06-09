import { AppProps } from 'next/app'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import '../styles/_app.css';
import '../lang/i18n';

const App = ({ Component, pageProps }: AppProps) => {
    return (
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
           );

}

export default App;
