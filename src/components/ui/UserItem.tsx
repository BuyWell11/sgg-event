import { SggItem } from '../../data/sggItem';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import ItemTooltip from './ItemTooltip';

interface Props {
  item: SggItem;
}

export default function UserItem({ item }: Props) {
  return (
    <Box>
      <ItemTooltip item={item}>
        <Image src={item.logo} alt={item.name} width={70} height={70} />
      </ItemTooltip>
    </Box>
  );
}
