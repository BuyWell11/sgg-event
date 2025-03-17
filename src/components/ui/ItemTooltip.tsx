'use client';
import { SggItem } from '../../data/sggItem';
import { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import '../../styles/components/itemTooltip.scss';

interface ItemTooltipProps {
  item: SggItem;
  children: React.ReactNode;
}

const ItemTooltip: React.FC<ItemTooltipProps> = ({ item, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  return (
    <Box position="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {isVisible && (
        <Box
          position="absolute"
          backgroundColor="white"
          border="1px solid #ccc"
          borderRadius="4px"
          padding="10px"
          zIndex={1000}
          top="100%"
          left="50%"
          transform="translateX(-50%)"
          boxShadow="md"
          className={'item-tooltip'}
        >
          <Image src={item.logo} alt={item.name} width={200} height={200} />
          <Text fontWeight="bold">{item.name}</Text>
          <Text>{item.description}</Text>
        </Box>
      )}
    </Box>
  );
};

export default ItemTooltip;
