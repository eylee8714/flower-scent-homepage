'use client';

import { Building } from '@/components/home/building';
export default function Home() {
  return (
    <main>
      <Building />

      {/* <div className="max-h-[80vh]">
        <Image src={AchiNight} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
      </div> */}

      {/* <div className="h-[30px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            ease: 'easeInOut',
            duration: 2,
            y: { duration: 1 },
          }}>
          <div>문화를 향유하다</div>
          <div>베이커리도 예술이다</div>
        </motion.div>
      </div> */}
    </main>
  );
}
