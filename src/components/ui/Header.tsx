'use client';
import { Box, Button, ButtonGroup, Heading } from '@chakra-ui/react';
import '../../styles/layout.scss';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import sggLogo from '../../../public/sgg.svg';
import Routes from '../../routes/routes';
import { useSession } from 'next-auth/react';
import React from 'react';

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session } = useSession();
  return (
    <Heading>
      <Box className={'header'}>
        <Link href={'/'}>
          <Image src={sggLogo} alt={'logo'} width={120} height={100} />
        </Link>
        <ButtonGroup size="sm">
          <Button
            onClick={() => {
              router.push(Routes.members);
            }}
            variant={pathname === Routes.members ? 'solid' : 'ghost'}
          >
            Участники
          </Button>
          <Button
            onClick={() => {
              router.push(Routes.rules);
            }}
            variant={pathname === Routes.rules ? 'solid' : 'ghost'}
          >
            Правила
          </Button>
          <Button
            onClick={() => {
              router.push(Routes.items);
            }}
            variant={pathname === Routes.items ? 'solid' : 'ghost'}
          >
            Предметы
          </Button>
          {session && (
            <Button
              onClick={() => {
                router.push(Routes.profile);
              }}
              variant={pathname === Routes.profile ? 'solid' : 'ghost'}
            >
              Профиль
            </Button>
          )}
          {session && (
            <Button
              onClick={() => {
                router.push(Routes.roulette);
              }}
              variant={pathname === Routes.roulette ? 'solid' : 'ghost'}
            >
              Рулетка
            </Button>
          )}
        </ButtonGroup>
        {!session && (
          <Link href={Routes.signin}>
            <Button size="sm">Залогиниться</Button>
          </Link>
        )}
      </Box>
    </Heading>
  );
};

export default Header;
