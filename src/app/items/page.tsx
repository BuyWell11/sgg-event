import { Box, Flex, Table } from '@chakra-ui/react';
import sggItems from '@/data/sggItem';
import Image from 'next/image';

export default function Items() {
  const sggItemsFiltered = sggItems.filter((sggItem) => sggItem.name !== 'Ничего');
  return (
    <Table.ScrollArea borderWidth="1px" rounded="md">
      <Table.Root size="md" variant={'outline'} stickyHeader showColumnBorder>
        <Table.Header>
          <Table.Row bg="bg.subtle">
            <Table.ColumnHeader textAlign="center">Изображение</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center">Название</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center">Тип</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center">Описание</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {sggItemsFiltered.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell>
                <Flex justify="center" align="center">
                  <Image src={item.logo} alt={item.name} width={140} height={140} />
                </Flex>
              </Table.Cell>
              <Table.Cell textAlign="center">{item.name}</Table.Cell>
              <Table.Cell textAlign="center" p={'1'}>
                {item.type}
              </Table.Cell>
              <Table.Cell textAlign="center">
                <Box style={{ whiteSpace: 'normal', textAlign: 'center' }}>{item.description}</Box>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
}
