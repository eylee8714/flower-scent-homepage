import Image from 'next/image';

import { Building } from '@/components/home/building';
import { Info } from '@/components/home/info';
import { Test } from '@/components/home/test';
import { Bread } from '@/components/home/bread';
import { Arthall } from '@/components/home/arthall';
import { News } from '@/components/home/news';
import { Alliance } from '@/components/home/alliance';
import { Order } from '@/components/home/order';
import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main>
      <div className="bg-black relative z-10">
        <Building />
        <Info />
      </div>
      <Bread />
      <Arthall />
      <Alliance />
    </main>
  );
}
