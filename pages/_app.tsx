import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import overrides  from './theme.tsx';
import '../styles/_app.css';

const App = ({ Component, pageProps }: AppProps) => {
   return (
   <ChakraProvider >
        <Component {...pageProps}/> 
    </ChakraProvider>
    );
};

export default App;
