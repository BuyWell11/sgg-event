import { Box, Grid } from '@chakra-ui/react';
import PlayerCard from '@/components/ui/PlayerCard';
import { UserService } from '@/api/UserService';
import User from '@/model/User';

export default async function Members() {
  const users = (await UserService.getUsers()) as unknown as User[];

  return (
    <Box className="page">
      <Grid templateColumns="repeat(3, 1fr)" gap="6">
        {users.map((user) => (
          <PlayerCard key={user.id} user={user} />
        ))}
      </Grid>
    </Box>
  );
}

export const dynamic = 'force-dynamic';
