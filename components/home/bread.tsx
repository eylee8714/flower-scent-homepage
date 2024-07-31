import Image from 'next/image';
import Croissant from '../../public/images/home/bread/croissant.jpg';
import Choco from '../../public/images/home/bread/choco.jpg';
import Cake from '../../public/images/home/bread/cake.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FadeIn } from './fade-in';
import croassantJson from '../../public/lotties/croassant.json';
import { memo, useEffect, useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// 로티 참고
// https://www.youtube.com/watch?v=-3RN-kpf8pg
// 크루아상 로티
// https://app.lottiefiles.com/animation/5934f397-969a-44cb-9f73-c3c6d0f0ada0?from=dashboard&panel=download
// 크루아상 원본
//https://www.freepik.com/premium-vector/croissant-fast-food-fragrant-bakery_44314255.htm#fromView=search&page=2&position=29&uuid=14645bc1-a10f-41db-8b52-694c849df965

export const Bread = () => {
  return (
    <>
      {/* <div className="flex justify-left pt-36 pb-48 flex-col bg-flower-desert-desertdust"> */}
      <div className="flex justify-left pt-36 pb-48 flex-col bg-flower-desert-oasisshade">
        {/* <Image alt="빵" className="w-80 mix-blend-multiply" src={OneLineBread} /> */}
        <FadeIn>
          <div className="flex justify-center items-center">
            <div className="flex flex-col text-flower-desert-desertdust drop-shadow-lg">
              {/* <div className="flex flex-col text-flower-desert-oasisshade"> */}

              <p className="text-5xl font-mbc1961 mb-10">베이커리도 예술이다</p>
              <p className="text-2xl font-light font-pretendard ">
                매일 아침 신선한 재료와 검증된 실력으로 <br />
                독보적인 비주얼의 베이커리를 구워내며 예술을 꽃피웁니다
              </p>
            </div>

            <DotLottieReact
              data={croassantJson}
              loop
              speed={0.4}
              autoplay
              style={{
                maxWidth: '600px',
              }}
            />

            {/* <Lottie speed={0.4} loop animationData={croassantJson} play style={{ width: 600 }} /> */}
          </div>
        </FadeIn>
        <>
          <Swiper
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={8e3}
            loop={true}
            loopAdditionalSlides={1}
            slidesPerView={5}
            spaceBetween={30}
            freeMode
            navigation={true}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[Pagination, Autoplay]}
            className="breadSwiper">
            {/* <Swiper
            slidesPerView={5}
            spaceBetween={30}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"> */}
            <SwiperSlide>
              <div className="h-[50vh]">
                <Image alt="크로와상" className="object-cover" src={Croissant} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[50vh]">
                <Image alt="딸기케이크" className="h-[100px] object-cover" src={Cake} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[50vh]">
                <Image alt="미니초코케이크" className="h-[100px] object-cover" src={Choco} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[50vh]">
                <Image alt="딸기케이크" className="h-[100px] object-cover" src={Cake} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[50vh]">
                <Image alt="미니초코케이크" className="h-[100px] object-cover" src={Choco} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[50vh]">
                <Image alt="딸기케이크" className="h-[100px] object-cover" src={Cake} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[50vh]">
                <Image alt="크로와상" className="object-cover" src={Croissant} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[50vh]">
                <Image alt="딸기케이크" className="h-[100px] object-cover" src={Cake} />
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </>
  );
};
