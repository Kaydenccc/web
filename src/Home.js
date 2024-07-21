// TODO: answer here
import { Box, SimpleGrid, Container, Select, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Cards from './Cards';
function Home() {
  // TODO: answer here
  const [cards, setCards] = useState();

  const getCards = async () => {
    const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4`;
    try {
      const res = await (await fetch(url)).json();
      setCards(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  function sortData(type) {
    // TODO: answer here
    if (type === 'Name' || type === '') {
      setCards(
        [...cards].sort(function compare(a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        })
      );
    }
    if (type === 'Attack') {
      setCards([...cards].sort((a, b) => a.atk - b.atk));
    }
    if (type === 'Defence') {
      setCards([...cards].sort((a, b) => a.def - b.def));
    }
  }
  // TODO: replace this
  useEffect(() => {
    getCards();
  }, []);

  return cards ? (
    <Container maxW="4xl">
      <Box mt={2} mb={6}>
        <Container maxW="2xl">
          <Select name="sort" onChange={(e) => sortData(e.target.value)} placeholder="Sort by">
            <option value="Name">Name</option>
            <option value="Attack">Attack</option>
            <option value="Defence">Defence</option>
          </Select>
        </Container>
      </Box>
      <Box>
        <SimpleGrid templateColumns="repeat(4,1fr)" gap={6}>
          {cards?.map((card, i) => (
            <Cards key={i} card={card} />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  ) : (
    <Box display={'flex'} flex="1" width="100%" justifyContent={'center'} alignItems="center">
      <Heading>Loading...</Heading>
    </Box>
  );
}

export default Home;
