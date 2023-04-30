import React from 'react';

const SummaryItem = (props) => {
  return (
    <>
      <div class={props.bg}>
        <div class="flex gap-3">
          <div dangerouslySetInnerHTML={{ __html: props.icon }} />
          <h1 class={props.text}>{props.category}</h1>
        </div>
        <h1 class="font-[800]">
          {props.score} <span class="text-gray-400">/ 100</span>
        </h1>
      </div>
    </>
  );
};

export default SummaryItem;
