// import { Button } from '../button';
import { Container } from './container';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import NightLeft from '../../public/images/home/building/night_left.jpg';
import Image from 'next/image';

export const Building = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ['start start', 'end end'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0.4]);

  return (
    <div className=" text-white ">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute -top-[--header-height] left-0 h-[calc(200vh-100px)] w-full ">
        <Image alt="등억꽃향 건물 이미지" className="sticky top-0 h-screen w-full object-cover" src={NightLeft} />
      </motion.div>
      <Container className="relative z-10 h-[--ahcitect-height] pb-7 ">
        <motion.div
          className="flex h-full flex-col items-end justify-end text-right"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.98 }}>
          <h1 className="mb-2 text-3xl  md:text-3xl font-light">문화를 향유하다</h1>
          <p className="font-semibold text-5xl font-gmarketsansMedium">복합문화공간 등억꽃향</p>
        </motion.div>
      </Container>
    </div>
  );
};
