import Umff from '../../public/images/home/alliance/umff.png';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FadeIn } from './fade-in';

export const Alliance = () => {
  return (
    <>
      {/* <div className="flex items-center px-10 pt-40 flex-col"> */}
      <div className=" py-40">
        <div className="px-60 pb-10">
          <FadeIn>
            <p className="text-5xl text-left w-full font-mbc1961 text-[#373737] tracking-in-expand ">제휴업체</p>
            <p className="text-3xl text-left w-full py-4 font-gmarketsansLight text-[#373737] tracking-in-expand">
              collaboration
            </p>
          </FadeIn>
        </div>

        <div className="">
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
            modules={[Pagination, Autoplay]}
            className="allianceSwiper">
            <SwiperSlide>
              <div className="w-72">
                <Image alt="울주세계산악영화제 로고" className="" src={Umff} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-72">
                <Image alt="울주세계산악영화제 로고" className="" src={Umff} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-72">
                <Image alt="울주세계산악영화제 로고" className="" src={Umff} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-72">
                <Image alt="울주세계산악영화제 로고" className="" src={Umff} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-72">
                <Image alt="울주세계산악영화제 로고" className="" src={Umff} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-72">
                <Image alt="울주세계산악영화제 로고" className="" src={Umff} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-72">
                <Image alt="울주세계산악영화제 로고" className="" src={Umff} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-72">
                <Image alt="울주세계산악영화제 로고" className="" src={Umff} />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
