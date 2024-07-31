'use client';

import React, { useState } from 'react';
import 'aos/dist/aos.css';
import Link from 'next/link';

export default function About() {
  const titles = ['대표이사 메세지', '연혁', '인재채용', '사회공헌', 'CI소개', '오시는 길'];
  const [currentTitle, setCurrentTitle] = useState<string>(titles[0]);

  return (
    <>
      <main>
        <div className="justify-center flex pt-48">
          <div className="text-center">
            <h1 className="text-4xl mb-4 font-semibold">코아주식회사 소개</h1>
            <h1 className="text-2xl mb-8">문화를 이끄는 선두주자</h1>
          </div>
        </div>
        <ul className="flex justify-center gap-4 text-2xl">
          {titles.map(title => (
            <li
              key={title}
              className={
                title === currentTitle
                  ? 'bg-flower-rococo-goldleaf text-white rounded-full px-4 py-2 cursor-default'
                  : 'bg-flower-laprovence-freshlinen text-flower-laprovence-lavender rounded-full px-4 py-2 cursor-pointer  hover:text-flower-rococo-goldleaf'
              }
              onClick={() => setCurrentTitle(title)}>
              {title}
            </li>
          ))}
        </ul>

        <div className="flex justify-center my-24 mx-20 flex-col">
          {currentTitle === '대표이사 메세지' && <Message />}
          {currentTitle === '연혁' && <History />}
          {currentTitle === '인재채용' && <Employment />}
          {currentTitle === '오시는 길' && <Map />}
        </div>
      </main>
    </>
  );
}

const Message = () => {
  return (
    <>
      <p className="text-3xl">
        코아주식회사 홈페이지를
        <br />
        방문해 주신 여러분을 진심으로 환영합니다.
      </p>
      <div className="text-xl flex flex-col gap-4 items-start my-10">
        <p>
          안녕하십니까.
          <br />
          저는 '이성호 과자점'의 창립자이자, 새로운 여정을 시작하는 ‘등억꽃향’의 대표이사 이성호입니다. <br />
          30여 년 전, 작은 빵집에서 시작한 저의 꿈이 오늘 이렇게 더 넓은 공간으로 확장된 것을 매우 기쁘게 생각합니다.
        </p>
        <p>
          이성호 과자점은 단순히 빵을 파는 곳이 아니라, 고객 한 분 한 분과의 소중한 인연을 나누는 공간이었습니다.
          <br />
          그동안의 여정은 여러분의 사랑과 응원 덕분에 가능했으며, 저희는 그 신뢰에 보답하고자 늘 최선을 다해왔습니다.
        </p>
        <p>
          이제 우리는 ‘등억꽃향’이라는 새로운 복합문화공간을 통해, 그동안 쌓아온 경험과 열정을 한층 더 확장해 나가고자
          합니다.
          <br />
          ‘등억꽃향’은 단순한 공간을 넘어서, 문화와 예술, 그리고 다양한 사람들의 이야기가 어우러지는 새로운 문화가 될
          것입니다.
          <br />
          이곳에서는 전시, 공연 등 다양한 문화적 경험을 통해 여러분의 삶에 풍성한 향기를 더하고 싶습니다.
        </p>
        <p>
          이곳에서 우리가 지향하는 가치는 여러분이 서로 소통하고 교감하는 데에 있습니다.
          <br />
          ‘등억꽃향’이 여러분 각자의 이야기를 담아내는 특별한 공간이 되기를 바라며,
          <br />
          여러분과 만들어가는 이 공간에서 많은 의미 있는 순간들이 함께하기를 기원합니다.
        </p>
        <p>앞으로도 계속해서 변함없는 사랑과 관심 부탁드리며, 언제나 여러분의 의견에 귀 기울이겠습니다.</p>
        <div className="self-end mt-10">
          <p className="mb-2">코아주식회사 대표이사</p>
          <span className="text-4xl font-semibold">이성호</span>
        </div>
      </div>
    </>
  );
};

const History = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <p className="text-3xl">2024</p>
        <p className="text-3xl">2020</p>
        <p className="text-3xl">2000</p>
        <p className="text-3xl">1994</p>
      </div>
    </>
  );
};

const Employment = () => {
  return (
    <>
      <div className="flex flex-col font-gmarketsansMedium">
        <p className="text-3xl mb-10 ">
          새로운 도전의 기다림
          <br />
          코아주식회사와 함께 미래를 선도할 인재를 찾습니다
        </p>

        <p className="text-xl my-5">모집분야 및 자격요건</p>
        <table className="border-collapse">
          <tr className="bg-[rgb(170,203,228)] text-white text-base text-center font-semibold py-10 border-b-[1px]">
            <td className="py-4 border-r-[1px]">직무</td>
            <td className="border-r-[1px]">담당업무</td>
            <td className="border-r-[1px]">근무시간</td>
            <td className="">자격요건</td>
          </tr>
          <tr className="text-base border-b-[1px] border-white">
            <td className="border-r-[1px] text-center pl-2 border-white">커피 바리스타</td>
            <td className="border-r-[1px] pl-5 border-white">
              • 음료제조 및 카운터 계산
              <br />
              • 베이커리 포장 <br />• 매장정리와 위생관리 및 고객응대 업무
            </td>
            <td className="border-r-[1px] text-center border-white">
              평일+주말 근무 <br />
              or
              <br />
              주말 근무
            </td>
            <td className="py-5 pl-5">
              <span className="font-bold">[우대사항]</span>
              <br />
              • 해당업종 경력자 및 자격증 소지자 우대
              <br />
              • 인근거주 우대 <br />• 유사업무 경험자 우대
            </td>
          </tr>
          <tr className="text-base">
            <td className="border-r-[1px] pl-5 text-center border-white">제과제빵사</td>
            <td className="border-r-[1px] pl-5 border-white">• 베이커리 생산업무</td>
            <td className="border-r-[1px] text-center border-white">평일+주말 근무</td>
            <td className="py-5 pl-5">
              <span className="font-bold">[우대사항]</span>
              <br />
              • 해당업종 경력자 및 자격증 소지자 우대
              <br />
              • 인근거주 우대 <br />• 유사업무 경험자 우대
            </td>
          </tr>
        </table>
        <p className="text-xl mt-10 mb-5">이런 분을 찾고있어요</p>
        <ol className="mb-16 gap-2 flex flex-col">
          <li>• 젊은 분위기에서 재미있게 일하고 싶으신 분</li>
          <li>• 같이 오래 근무할 성실하고 책임감 있는 분</li>
          <li>• 밝고 쾌활한 분 환영</li>
        </ol>
        <p className="text-xl mb-5">직원혜택</p>
        <ol className="mb-16 gap-2 flex flex-col">
          <li>• 직원 할인 - 베이커리 30% 할인</li>
          <li>• 특별한 날엔 선물을 드려요 - 생일케이크 지급</li>
          <li>• 근무 시 제조음료 하루 2잔 제공</li>
          <li>• 점심 식사 제공 (식대 선택 가능)</li>
        </ol>
        <p className="text-xl mb-5">서류접수기간 및 지원방법</p>
        <ol className="mb-16 gap-2 flex flex-col">
          <li>• 기간 : 상시접수</li>
          <li>• 메일로 이력서 전송</li>
          <li>• flowerscent.cafe@gmail.com</li>
        </ol>

        <p className="text-xl mb-5">전형 절차</p>
        <ol className="mb-16 gap-2 flex flex-col">
          <li>서류전형 - 실무면접 - 최종합격</li>
        </ol>

        <p className="text-xl mb-5">기타</p>
        <ol className="mb-16 gap-2 flex flex-col">
          <li>허위사실이 발견될 경우 채용이 취소될 수 있습니다.</li>
        </ol>

        {/* 정규직(수습3개월) - 급여 회사 내규 */}
      </div>
    </>
  );
};

const Map = () => {
  return (
    <>
      <div className="text-xl">
        <div className="flex justify-center gap-10 items-center">
          <div className="border border-flower-rococo-louisblue">
            <img
              alt="등억꽃향 지도"
              src="http://t1.daumcdn.net/roughmap/imgmap/fddc888a85545fa87dff6961fa1a781e1497aaa56bb480c30e86fa379513fe18"
              width="798"
              // height="598"
            />
          </div>
          <div className="flex flex-col gap-7 text-base">
            <div>
              <h5 className="font-semibold mb-2">주소</h5>
              <p>울산 울주군 상북면 등억알프스로 224 등억꽃향</p>
            </div>
            <div>
              <h5 className="font-semibold mb-2">연락처</h5>
              <p> 0507-1361-6275</p>
            </div>
            <div>
              <h5 className="font-semibold mb-2">주변버스</h5>
              <div className="flex flex-col gap-2">
                <Link
                  href="https://map.kakao.com/?busStopId=BS120392"
                  target="balnk"
                  className="hover:text-flower-laprovence-provenceindigo">
                  <p>자수정동굴입구 (15327) | 65m </p>
                  <span className=" bg-flower-desert-oasisshade text-white px-1 rounded-md border">일반</span> &nbsp;
                  304
                </Link>
                <Link
                  href="https://map.kakao.com/?busStopId=BS120450"
                  target="balnk"
                  className="hover:text-flower-laprovence-provenceindigo">
                  <p className="">자수정동굴입구 (15328) | 154m </p>
                  <span className=" bg-flower-desert-oasisshade text-white px-1 rounded-md border">일반</span> &nbsp;
                  304 | 323(지원1)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
