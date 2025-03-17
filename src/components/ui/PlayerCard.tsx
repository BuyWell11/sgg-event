'use client';
import Image from 'next/image';
import { Text } from '@chakra-ui/react';
import '../../styles/components/playerCard.scss';
import User from '../../model/User';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

interface Props {
  user: User;
}

const PlayerCard = ({ user }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <button className={'player-card'} onClick={() => router.push(`${pathname}/${user.id}`)}>
      <Image src={user.logo} alt="avatar" width={70} height={70} />
      <Text fontWeight="bold" textStyle="xl">
        {user.name}
      </Text>
    </button>
  );
};

export default PlayerCard;
