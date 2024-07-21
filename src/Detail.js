// TODO: answer here
import { Box, SimpleGrid, Divider, Container, Image, Button, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Detail() {
  const [card, setCard] = useState([]);
  const navigate = useNavigate();
  // get url prams
  const { id } = useParams();
  // fetch data
  const getCard = async (id) => {
    const uri = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`;
    try {
      const res = await (await fetch(uri)).json();
      setCard(res.data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCard(id);
  }, [id]);

  return card.length > 0 ? (
    <Container maxW={'100%'}>
      <Button onClick={() => navigate(-1)}>Back</Button>
      <Container maxW={'6xl'}>
        <Box display={'flex'} gap={4}>
          <Box className="yugioh-card">
            <Box>
              <Image src={card[0]?.card_images[0]?.image_url} objectFit="cover" minW={250} width={250} />
            </Box>
            <Divider />
          </Box>
          <Box>
            <Heading as="h2">{card[0]?.name}</Heading>
            <Text fontWeight={700}>Level: {card[0]?.level}</Text>
            <Text fontWeight={700}>{card[0]?.attribute}</Text>
            <Text fontWeight={700}>
              ATK/{card[0]?.atk} DEF/{card[0]?.def}
            </Text>
            <Text>
              [ {card[0]?.type} / {card[0]?.race} ]
            </Text>
            <Text>{card[0]?.desc}</Text>
          </Box>
        </Box>
        <Box>
          <Text fontWeight={700} w="100%" textAlign={'center'}>
            Card Set
          </Text>
          <SimpleGrid gap={2} templateColumns="repeat(7,1fr)">
            {card[0]?.card_sets?.map((x) => (
              <Box key={x.set_code} border="1px" width={'160px'} borderColor="gray.200">
                <Text>Name: {x.set_name}</Text>
                <Text>Code: {x.set_code}</Text>
                <Text>Rarity: {x.set_rarity}</Text>
                <Text>Price: {x.set_price}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Container>
  ) : (
    <Box display={'flex'} flex="1" width="100%" justifyContent={'center'} alignItems="center">
      <Heading>Loading...</Heading>
    </Box>
  );
}

export default Detail;
