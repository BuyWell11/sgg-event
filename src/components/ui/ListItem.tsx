'use client';
import { Card, IconButton, Text } from '@chakra-ui/react';
import SggGameStatus from './SggGameStatus';
import React, { useState } from 'react';
import Game from '../../model/Game';
import SggEvent from '../../model/SggEvent';
import { MdDeleteOutline } from 'react-icons/md';
import ConfirmationModal from './ConfirmationModal';
import { UserService } from '../../api/UserService';
import { useRouter } from 'next/navigation';

interface Props {
  item: Game | SggEvent;
  editable?: boolean;
  userId?: string;
}

function isGame(item: Game | SggEvent): item is Game {
  return (item as Game).status !== undefined;
}

export default function ListItem({ item, editable, userId }: Props) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleConfirm = () => {
    if (!userId) {
      return;
    }
    if (isGame(item)) {
      UserService.deleteGame(userId, item.id);
    } else {
      UserService.deleteEvent(userId, item.id);
    }
    router.refresh();
  };

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
        {editable && (
          <>
            <IconButton aria-label="delete" onClick={() => setIsModalOpen(true)}>
              <MdDeleteOutline />
            </IconButton>
            <ConfirmationModal isOpen={isModalOpen} onConfirm={handleConfirm} onCancel={() => setIsModalOpen(false)} />
          </>
        )}
      </Card.Footer>
    </Card.Root>
  );
}
