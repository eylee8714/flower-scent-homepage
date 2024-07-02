'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathname = usePathname();

  return (
    <div className="flex justify-between">
      <div>
        <Image src="/logo.svg" width={150} height={100} alt="로고" />
      </div>
      <ul className="flex gap-[20px] font-pretendard font-normal *:cursor-pointer">
        <li>회사소개</li>
        {/* 코아주식회사 소개*/}
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

        <li>이벤트/소식</li>
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
  );
}
