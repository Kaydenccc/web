import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// TODO: answer here
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
const AnswerHere = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <CSSReset />
      <AnswerHere />
    </ChakraProvider>
  </React.StrictMode>
);
