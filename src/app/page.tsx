import { Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import sggImage from '../../public/sgg.svg';
import Link from 'next/link';

export default function Home() {
  return (
    <Box className={'page'}>
      <Image src={sggImage} alt={'logo'} />
      <Box className={'text-block'}>
        <Heading size="4xl">Что такое сгг?</Heading>
        <Text fontSize="xl">
          Это коллективный челлендж группы стримеров на прохождение игр из стима.
          <br />
          Цель: пройти игры с каждого временного отрезка.
          <br />
          Временные отрезки с 2024-2025 до 2000-2001.
          <br />
          При дропе игры участник возвращается на предыдущий временной отрезок.
          <br />
          При выпадении дропа, бросается монетка. Если выпадает выбранное значение, то дроп не происходит.
        </Text>
      </Box>
      <Box className={'text-block'}>
        <Heading size="4xl">Игра считается пройденной:</Heading>
        <Text fontSize="xl">
          1) После финальных титров честного прохождения;
          <br />
          2) Прохождение уровня, после которого уровни начинают повторяться;
          <br />
          3) Если побить high score.
        </Text>
      </Box>
      <Box className={'text-block'}>
        <Heading size="4xl">Проигравшие</Heading>
        <Text fontSize="xl">
          Проигравшими в СГГ считаются не вошедшие в топ 3.
          <br />
          Они берут наказание из пула наказаний.
        </Text>
      </Box>
      <Box className={'text-block'}>
        <Heading size="4xl">Полезные ссылки</Heading>
        <Text fontSize="xl">
          <Link target={'_blank'} href={'https://discord.gg/nc8fkS7x7E'}>
            Дискорд
          </Link>
          <br />
          <Link target={'_blank'} href={'https://t.me/sgg_y2k'}>
            Телега
          </Link>
          <br />
          <Link target={'_blank'} href={'https://www.donationalerts.com/r/buywell'}>
            Поддержать автора сайта
          </Link>
          <br />
        </Text>
      </Box>
    </Box>
  );
}
