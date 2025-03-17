'use client';
import dynamic from 'next/dynamic';
import React from 'react';

const ReactPlayer = dynamic(
  () => import('react-player'),
  { ssr: false }, // Отключаем SSR для этого компонента
);

interface Props {
  url: string;
}

export default function Player({ url }: Props) {
  return <ReactPlayer url={url} playing={true} />;
}
