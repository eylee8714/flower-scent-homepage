'use client';

export default function Footer() {
  const onScrollTop = (event: any) => {
    console.log('스크롤 탑', event);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#404040] py-32 px-52 text-white  cursor-default">
      <div className="flex justify-between items-center text-4xl pb-10 border-b-[1px] border-[#bbbbbb]">
        <p className="">Work with us</p>
        <p className="mt-4 linehover cursor-pointer">flowerscent.cafe@gmail.com</p>
      </div>
      <div className="flex gap-20 py-10 border-b-[1px] border-[#bbbbbb]">
        <div>
          <h5 className="text-4xl pb-4">사이트맵</h5>
          <ul className="text-[#bbbbbb]">
            <li className="text-2xl">회사소개</li>
            <li className="text-2xl">등억꽃향</li>
            <li className="text-2xl">코아아트홀</li>
            <li className="text-2xl">알프스관</li>
            <li className="text-2xl">꽃향 뉴스</li>
          </ul>
        </div>
        <div>
          <h6 className="text-4xl pb-4">SNS</h6>
          <p className="text-2xl text-[#bbbbbb]">인스타그램</p>
        </div>
      </div>
      <div className="flex items-end justify-between">
        <p className="text-5xl pt-10">코아주식회사</p>
        <p className="text-3xl cursor-pointer linehover" onClick={onScrollTop}>
          Back to top ↑
        </p>
        <p className="text-3xl">Copyright © COA Corporation 2024</p>
      </div>
    </div>
  );
}
