import React from 'react';

const Result = () => {
  return (
    <>
      <div class="bg-gradient-to-b from-[#7857FF] to-[#2E2BE9] rounded-xl text-center w-full flex items-center justify-center flex-col h-[50vh] py-6">
        <h3 class="text-gray-300 font-bold text-2xl">Your Result</h3>
        <div class="bg-gradient-to-b from-[#4e21ca] to-[#2421ca] rounded-full text-center w-[50%] h-[22vh] my-10 flex items-center justify-center flex-col">
          <h1 class="text-8xl text-[#ffffff]">76</h1>
          <h4 class="text-gray-400">of 100</h4>
        </div>
        <div class="mt-[-30px] w-[60%]">
          <h2 class="text-white text-3xl mb-5">Great</h2>
          <h4 class="text-white">Great You scored higher than 65% of the people who have taken these tests.</h4>
        </div>
      </div>
    </>
  );
};

export default Result;
