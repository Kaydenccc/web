import { Divider, Heading, Image, Stack, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Cards({ card }) {
  return (
    <Link to={`/card/${card.id}`}>
      <Box className="yugioh-card">
        <Box>
          <Image src={card.card_images[0].image_url} objectFit="cover" width="100%" />
          <Stack spacing="3">
            <Heading as="h2" size="md">
              {card.name}
            </Heading>
          </Stack>
        </Box>
        <Divider />
      </Box>
    </Link>
  ); // TODO: replace this
}

export default Cards;
