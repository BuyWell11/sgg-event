import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', marginTop: 'auto', padding: '10px' }}>
      <Link href="https://www.twitch.tv/buywell">Made by BuyWell</Link>
    </footer>
  );
}
