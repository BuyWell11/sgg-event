import { Box, Text } from '@chakra-ui/react';
import SigninForm from '@/components/form/SigninForm';

export default async function Signin() {
  return (
    <Box className={'page'}>
      <Text>SignIn</Text>
      <SigninForm />
    </Box>
  );
}
