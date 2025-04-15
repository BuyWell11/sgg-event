import SggUser from '../../model/User';
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import '../../styles/components/userInfo.scss';
import sggItems, { SggItem } from '../../data/sggItem';
import UserItem from './UserItem';
import Link from 'next/link';
import { FaTwitch } from 'react-icons/fa';

interface Props {
  user: SggUser;
}

export default function UserInfo({ user }: Props) {
  const items: SggItem[] = [];
  if (user.items) {
    user.items.forEach((item) => {
      const foundItem = sggItems.find((sggItem) => sggItem.name === item);
      if (foundItem) {
        items.push(foundItem);
      } else {
        items.push(sggItems[0]);
      }
    });
  }

  return (
    <Box className={'user-info'}>
      <Box className={'pic-box'}>
        <Image src={user.logo} alt={'logo'} width={140} height={140} />
        <Link href={user.channel} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <FaTwitch size={'2em'} color={'purple'} /> Твич
        </Link>
      </Box>
      <Box>
        <Text textStyle="4xl">{user.name}</Text>
        <Text textStyle="2xl">Текущая игра: {user.game}</Text>
        <Box className={'item-box'}>
          <Text textStyle="2xl">Предметы:</Text>
          <Box className={'items'}>
            {items.map((item, index) => (
              <UserItem key={index} item={item} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
