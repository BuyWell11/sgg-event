'use client';
import React, { useState, useEffect, useMemo, useRef } from 'react';
import '../../styles/components/roulette.scss';
import { SggItem } from '../../data/sggItem';
import Image from 'next/image';

interface Props {
  items: SggItem[];
}

const Roulette = ({ items }: Props) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [stopPosition, setStopPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const duplicatedItems = useMemo(() => {
    const withoutNothing = items.filter((item) => item.name !== 'Ничего');
    return [...withoutNothing, ...withoutNothing, ...withoutNothing];
  }, [items]);

  const startSpin = () => {
    setIsSpinning(true);
    const randomIndex = Math.floor(Math.random() * duplicatedItems.length);
    console.log(randomIndex);
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const itemWidth = 200;
    const centerOffset = (containerWidth - itemWidth) / 2; // Центрирование относительно контейнера
    const newStopPosition = randomIndex * itemWidth - centerOffset; // Корректное смещение
    console.log(newStopPosition);
    setStopPosition(newStopPosition);
  };

  useEffect(() => {
    if (isSpinning) {
      const timeout = setTimeout(() => {
        setIsSpinning(false);
      }, 3000); // Время прокрутки
      return () => clearTimeout(timeout);
    }
  }, [isSpinning]);

  return (
    <div className="roulette-container" ref={containerRef}>
      <div className={`roulette ${isSpinning ? 'spinning' : ''}`} style={{ transform: `translateX(${stopPosition}px)` }}>
        {duplicatedItems.map((item, index) => (
          <div key={index} className="roulette-item">
            <Image src={item.logo} alt={item.name} width={100} height={100} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <div className="vertical-line"></div>
      <button onClick={startSpin}>Крутить</button>
    </div>
  );
};

export default Roulette;
