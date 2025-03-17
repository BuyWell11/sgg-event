import { Card, Text } from '@chakra-ui/react';
import SggGameStatus from './SggGameStatus';
import React from 'react';
import Game from '../../model/Game';
import SggEvent from '../../model/SggEvent';

interface Props {
  item: Game | SggEvent;
}

function isGame(item: Game | SggEvent): item is Game {
  return (item as Game).status !== undefined;
}

export default function ListItem({ item }: Props) {
  return (
    <Card.Root width="320px" padding="2">
      <Card.Body gap="2" padding="2">
        <Card.Title mt="2">{item.name}</Card.Title>
        <Card.Description>{item.comment}</Card.Description>
        {isGame(item) && <SggGameStatus status={item.status} />}
      </Card.Body>
      <Card.Footer justifyContent="flex-end" padding="2">
        {item.createdAt && (
          <Text fontSize="sm" color="gray.500" whiteSpace="nowrap" textAlign="right">
            {new Date(item.createdAt).toLocaleDateString('ru-RU', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
            <br />
            {new Date(item.createdAt).toLocaleTimeString('ru-RU', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Text>
        )}
      </Card.Footer>
    </Card.Root>
  );
}
