import React from "react";
import Navbar from "./Navbar";
import styles from '../styles/animations.module.css'

const Page = () => {
  return (
    <main className="w-[calc(100%-100px)] max-w-[1240px]  md:w-[calc(100%-200px)] mx-auto">
      <Navbar />
      <div className="mt-4 h-auto md:h-[654px] mx-auto bg-zinc-950 rounded-[30px] overflow-hidden relative border border-[linear-gradient(to bottom, #ffffff 100%, #000000 10%)] p-4 md:p-0">
        <div className="w-full text-center text-white/opacity-5 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-['Instrument Sans'] tracking-[6px] absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-slide-up">
          COMING SOON
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-full max-w-[1080px] h-[200px] md:h-[433px] bg-violet-800 rounded-full blur-[290px]" />

        <div className="mt-[68px] px-4 md:px-0 md:absolute left-1/2 transform md:-translate-x-1/2 w-full max-w-[782px]">
          <div className="mx-auto h-60 text-center">
            <div className={`text-white text-2xl sm:text-3xl md:text-[46px] lg:text-6xl font-bold font-['Instrument Sans'] leading-tight md:leading-[82px] ${styles["animate-slide-down"]}`}>
              Digital Ownership Through Fractional NFTs
            </div>  
            <div className={`mt-4 md:mt-0 md:absolute left-1/2 transform md:-translate-x-1/2 top-[182px] w-full max-w-[760px] opacity-50 text-white text-base md:text-[22px] font-normal font-['Instrument Sans'] leading-6 md:leading-[34px] `}>
              Secure, transparent, and user-friendly platform for
              fractionalizing NFTs, enabling investors of all sizes to
              participate in the digital asset
            </div>
          </div>
          <div className=" mb-8 md:mt-0 md:absolute left-1/2 transform md:-translate-x-1/2 top-[290px] w-full max-w-[604px] h-[74px]  ">
            <div className=" w-full h-full bg-black rounded-[37px] border-[0.8px]  border-white" style={{ opacity: 0.14 }}></div>
            <div className="absolute left-1/2 transform md:-translate-x-1/2 md:left-[70%] md:transform-none top-[6px] w-[177px] h-[62px] flex items-center justify-center gap-6 ">
              <div className="bg-violet-800 rounded-[37px] px-4 py-2 md:px-9 md:py-5 flex items-center justify-center ">
                <div className="text-white text-sm md:text-lg font-medium font-['Instrument Sans']">
                  Get in touch
                </div>
              </div>
            </div>
            <div className="absolute left-[28px] top-[28px] opacity-30 text-white text-sm md:text-lg font-medium font-['Instrument Sans']">
              Add your email address
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;