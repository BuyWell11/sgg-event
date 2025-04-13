import { Box, Text } from '@chakra-ui/react';
import '../../styles/components/list.scss';
import Game from '../../model/Game';
import SggEvent from '../../model/SggEvent';
import React from 'react';
import ListItem from './ListItem';

interface Props {
  items: Array<Game> | Array<SggEvent>;
  title: string;
  editable?: boolean;
  userId?: string;
}

export default function List({ items, title, editable, userId }: Props) {
  if (items.length === 0) {
    return null;
  }
  return (
    <Box className={'list'}>
      <Text textStyle="4xl">{title}</Text>
      <Box className="list__content">
        {items
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .map((item) => (
            <ListItem key={item.id} item={item} editable={editable} userId={userId} />
          ))}
      </Box>
    </Box>
  );
}
