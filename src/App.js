// TODO: answer here
import { Box, Center, Heading } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Detail from './Detail.js';
import Notfound from './Notfound.js';
const App = () => {
  // const MyRouter = () => <Route to="/" element={<Home />} />; // TODO: replace this

  return (
    <Box className="App" display="flex" h={'100vh'} flexDirection="column">
      {/* Navbar */}
      <Box w="100vw" bg="#b25819" p={6}>
        <Center>
          <Heading as="h1" color="#e2ded5">
            Yugi-Oh Card Deck
          </Heading>
        </Center>
      </Box>

      {/* Route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<Detail />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Box>
  );
};

export default App;
