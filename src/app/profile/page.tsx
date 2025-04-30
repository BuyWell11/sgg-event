import { Box } from '@chakra-ui/react';
import '../../styles/pages/profile.scss';
import AddGameForm from '@/components/form/AddGameForm';
import AddEventForm from '@/components/form/AddEventForm';
import List from '@/components/ui/List';
import UpdateUserForm from '@/components/form/UpdateUserForm';
import UserInfo from '@/components/ui/UserInfo';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/configs/auth';
import { UserService } from '@/api/UserService';

export default async function Profile() {
  const session = await getServerSession(authConfig);
  if (!session) {
    return null;
  }

  const user = await UserService.getUser(session.user.id);

  return (
    <Box className="page">
      <UserInfo user={user} />
      <Box className={'form-group'}>
        <AddGameForm userId={user.id} />
        <AddEventForm userId={user.id} />
        <UpdateUserForm userId={user.id} game={user.game} items={user.items} />
      </Box>
      <Box className={'list-group'}>
        <List title={'Игры'} items={user.games} editable={true} userId={user.id} />
        <List title={'Ивенты'} items={user.events} editable={true} userId={user.id} />
      </Box>
    </Box>
  );
}
