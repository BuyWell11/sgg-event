import { ColorPalette } from '@chakra-ui/react';
import { Status } from '@chakra-ui/react';
import { GameStatus } from '../../model/Game';
import React from 'react';

const statusMap: Record<GameStatus, ColorPalette> = {
  [GameStatus.drop]: 'red',
  [GameStatus.complete]: 'green',
  [GameStatus.skipped]: 'yellow',
};

interface Props {
  status: GameStatus;
}

export default function SggGameStatus({ status }: Props) {
  return (
    <Status.Root colorPalette={statusMap[status]}>
      <Status.Indicator />
      {status}
    </Status.Root>
  );
}
