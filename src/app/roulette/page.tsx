import { Box, Text } from '@chakra-ui/react';
import SggRoulette from '@/components/ui/SggRoulette';
import sggItems from '@/data/sggItem';

export default function Roulette() {
  return (
    <Box className="page">
      <Text textStyle="7xl" fontWeight="bold">
        Казино
      </Text>
      <SggRoulette items={sggItems} />
    </Box>
  );
}
