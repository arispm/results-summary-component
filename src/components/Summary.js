import React from 'react';
import SummaryItem from './SummaryItem';
import data from '../data';

const Summary = () => {
  return (
    <>
      <div class="isi2 w-full h-[50vh] py-6 flex justify-around flex-col px-9">
        <div class="font-[800] text-2xl">Summary</div>
        {data.map((item) => {
          return <SummaryItem category={item.category} score={item.score} icon={item.icon} text={item.text} bg={item.bg} />;
        })}
        <div className="text-center bg-slate-700 text-white p-3 rounded-3xl">Continue</div>
      </div>
    </>
  );
};

export default Summary;
