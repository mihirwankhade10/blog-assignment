import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Blog from './Components/Blog';


const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Blog />
    </ChakraProvider>
  );
};

export default App;