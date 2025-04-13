import { UserService } from '@/api/UserService';
import { Box } from '@chakra-ui/react';
import List from '@/components/ui/List';
import '../../../styles/pages/profile.scss';
import UserInfo from '@/components/ui/UserInfo';
import { lazy } from 'react';

interface Props {
  params: Promise<{ id: string }>;
}

const Player = lazy(() => import('@/components/ui/Player'));

export default async function UserPage({ params }: Props) {
  const { id } = await params;
  const user = await UserService.getUser(id);
  return (
    <Box className="page">
      <UserInfo user={user} />
      <Player url={user.channel} />
      <Box className={'list-group'}>
        <List title={'Игры'} items={user.games} />
        <List title={'Ивенты'} items={user.events} />
      </Box>
    </Box>
  );
}
