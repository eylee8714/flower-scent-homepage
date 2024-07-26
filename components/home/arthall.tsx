import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: '/images/home/event/art5.jpg',
    thumbnail: '/images/home/event/art5.jpg',
  },
  {
    original: '/images/home/event/art2.jpg',
    thumbnail: '/images/home/event/art2.jpg',
  },
];

export const Arthall = () => {
  return (
    // <div className="bg-gradient-to-r from-[#fefff3] via-[#fffafa] to-[#f4faff]">÷
    <div className="bg-gradient-to-r from-[#dcdbd7] to-[#bcb7ad]">
      <div className="flex py-52 px-60">
        {/* <video height="" autoPlay muted loop>
              <source src="../../videos/arthall_moon.mov" type="video/mp4" />
            </video> */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          viewport={{ margin: '100% 0px -300px 0px' }}
          className="flex flex-col justify-center text-[#373737] pr-10">
          <p className=" text-5xl mb-2 text-left w-full py-4 font-mbc1961">코아아트홀</p>
          <p className="text-4xl mb-2 text-left w-full py-4 font-mbc1961">전시·공연</p>
          <p className="text-2xl mb-2 w-[32vw] py-4 font-pretendard font-light mt-12">
            코아아트홀은 다채로운 작품과 전시를 통해 방문객들에게 <br />
            시각적 감동과 함께 깊이 있는 문화적 경험을 전달합니다
            <br />
            <br />
            {/* 특별 이벤트와 공연을 통해 풍성한 문화적 경험을 선사합니다. */}
            예술과 문화의 아름다움을 함께 나누는 기쁨을 경험해 보세요
            <br />
            전시 및 이벤트 일정은 정기적으로 업데이트 됩니다
          </p>
        </motion.div>
        {/* <video height="" autoPlay muted loop>
          <source src="../../videos/arthall_moon.mov" type="video/mp4" />
        </video> */}
        <div className=" w-[60vw]">
          <ImageGallery
            items={images}
            showFullscreenButton={false}
            // autoPlay={true}
            showPlayButton={false}
            showNav={false}
            slideInterval={6000}
          />
        </div>
      </div>
    </div>
  );
};
