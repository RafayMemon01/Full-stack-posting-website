import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import { store } from './store/store';

import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.100", "#000")(props),
      bg: mode("gray.800", "#fff")(props),
      fontFamily: 'Roboto, sans-serif',

    },
  }),
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const theme = extendTheme({ config, styles });

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

  <BrowserRouter>
  <ChakraProvider>
    <App />
  </ChakraProvider>
  </BrowserRouter>
  </Provider>
)
