'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Box className={'page'}>
      <Text>Блин, что-то сломалось</Text>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Перезапустить страницу
      </Button>
    </Box>
  );
}
