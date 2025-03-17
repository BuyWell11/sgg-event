import { Box, Button, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default async function PageNotFound() {
  return (
    <Box className={'page'}>
      <Text>Такой страницы нет, вернись на главную!</Text>
      <Link href={'/'}>
        <Button>Вернуться</Button>
      </Link>
    </Box>
  );
}
