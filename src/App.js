import React from 'react';
import Main from './components/Main';
import { Flex } from '@chakra-ui/react';
import '@fontsource/open-sans';

function App() {
  return (
    <Flex h="100vh" justify="center" align="center">
      <Main />
    </Flex>
  );
}

export default App;
