import { Container } from './container';
import { FadeIn } from './fade-in';

export const Info = () => {
  return (
    <Container className="relative z-10 max-w-[820px] space-y-12 py-56 text-2xl font-normal text-white md:text-3xl ">
      <FadeIn>
        <p>
          '등억꽃향'은
          <br />
          1994년부터 30여년간 지역민의 사랑을 받아온 베이커리 <br />
          '이성호 과자점'이 오랜 시간 준비를 거쳐 새롭게 선보이는 공간입니다.
        </p>
      </FadeIn>
      <FadeIn>
        <p>
          커피와 베이커리 뿐만 아니라 파인 다이닝, 전시와 공연 등 <br />
          다양한 문화를 향유할 수 있는 공간으로 만들어 가겠습니다.
        </p>
      </FadeIn>
      <FadeIn>
        <p>
          푸르른 녹음과 자연을 벗 삼는 이곳,
          <br />
          '등억꽃향'에서의 쉼과 여유가 당신의 일상에 스며들길 바랍니다.
        </p>
      </FadeIn>
    </Container>
  );
};
