'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Nav() {
  return (
    <>
      <div className="bg-black z-[100] h-[100px] top-0 left-0 fixed w-screen opacity-10 " />
      <div className="fixed h-[100px] z-[100] w-screen text-white  mix-blend-difference ">
        <div className="flex h-full justify-between  items-center px-[70px]">
          <Image src="/logo_white.svg" width={150} height={100} alt="로고" />
          <ul className="flex gap-[20px] font-normal *:cursor-pointer">
            <li>
              <span className="">회사소개</span>
            </li>
            {/* 코아주식회사 소개 -> 철학*/}
            {/* 대표 메시지 (코아주식회사 인사말) */}
            {/* 연혁 */}
            {/* 조직도 */}
            {/* 오시는길 */}
            {/* 채용공고 */}

            <li>등억꽃향</li>
            {/* 브랜드 스토리 */}
            {/* 건축물 스토리 */}
            {/* 베이커리 */}
            {/* 카페 */}

            <li>코아아트홀</li>
            {/* 전시관 소개 */}

            <li>알프스관</li>
            {/* 편집샵 소개 */}

            <li>꽃향 뉴스</li>
            {/* 꽃향 소식 */}
            {/* 언론 보도 */}
            {/* 고객만족활동 */}
            {/* 사회공헌 */}
          </ul>
          <div>제휴/제안</div>
          {/* 협력사 소개 */}
          {/* 기업 및 단체 구매 문의 */}
          {/* 입점 제의 */}
          {/* 대관 문의 */}
        </div>
      </div>
    </>
  );
}
