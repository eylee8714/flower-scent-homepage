'use client';

import React from 'react';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  return (
    <>
      <main>
        <div className="h-96 justify-center flex pt-40">
          <div className="text-center">
            <h1 className="text-4xl mb-[10px]">코아아트홀</h1>
            <h1 className="text-2xl">문화를 이끄는 선두주자</h1>
          </div>
        </div>
        <ul className="flex justify-center gap-4 text-2xl">
          <li>기업이념</li>
          <li>대표이사 메세지</li>
          <li>연혁</li>
          <li>인재채용</li>
          <li>사회공헌</li>
          <li>CI소개</li>
          <li>오시는 길</li>
        </ul>

        <div className="flex justify-center my-10">기업이념 내용</div>
      </main>
    </>
  );
}
