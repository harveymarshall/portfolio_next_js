import { memo } from 'react';
import type { FC } from 'react';


export default function About() {
    return (
      <div className="relative z-[999] w-full h-[800px] flex flex-col items-start overflow-hidden" style={{ top: '200px' }}>
        <div className="relative left-1/2 top-[100px] w-[612px] h-[109px] text-[#171717] text-2xl leading-[1.5] font-medium font-['JetBrains_Mono',system-ui,-apple-system,'Segoe_UI',Roboto,'Helvetica_Neue',Arial,'Noto_Sans','Liberation_Sans',sans-serif] text-center flex items-center justify-center flex-col -translate-x-1/2">
          Hi, I'm Harvey. I am a Software, Web Developer as well as working primarily as a Data Engineer.
        </div>
        <div className="relative left-1/2 top-[375px] w-[622px] h-[145px] text-[#171717] text-2xl leading-[1.5] font-medium font-['JetBrains_Mono',system-ui,-apple-system,'Segoe_UI',Roboto,'Helvetica_Neue',Arial,'Noto_Sans','Liberation_Sans',sans-serif] text-center flex items-center justify-center flex-col -translate-x-1/2">
          Alongside my work and side projects, I run the YouTube channel HarveysCodeBase where I create and publish 'A Day In The Life' style Vlogs showing my life as an Engineer/Developer and showcasing my passions for coding and technology.
        </div>
        <div className="absolute left-[640px] top-[230px] w-[162px] h-[176px] flex items-center justify-center flex-col -translate-x-1/2 rounded-[17px]">
          <div className="relative w-[162px] h-[176px] flex flex-col rounded-[52px] bg-[#b5dbff] bg-center bg-no-repeat bg-cover overflow-hidden" style={{ backgroundImage: "'./public/profilePic.png'" }}>
          </div>
        </div>
      </div>
    );
}