'use client';
import { Box } from '@chakra-ui/react';
import '../../styles/pages/profile.scss';
import { useSession } from 'next-auth/react';
import AddGameForm from '@/components/form/AddGameForm';
import AddEventForm from '@/components/form/AddEventForm';
import List from '@/components/ui/List';
import UpdateUserForm from '@/components/form/UpdateUserForm';
import UserInfo from '@/components/ui/UserInfo';

export default function Profile() {
  const { data: session } = useSession();
  if (!session) {
    return null;
  }

  return (
    <Box className="page">
      <UserInfo user={session.user} />
      <Box className={'form-group'}>
        <AddGameForm session={session} />
        <AddEventForm session={session} />
        <UpdateUserForm session={session} />
      </Box>
      <Box className={'list-group'}>
        <List title={'Игры'} items={session.user.games} editable={true} userId={session.user.id} />
        <List title={'Ивенты'} items={session.user.events} editable={true} userId={session.user.id} />
      </Box>
    </Box>
  );
}
