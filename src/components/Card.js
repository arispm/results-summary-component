import React from 'react';
import Result from './Result';
import Summary from './Summary';
import './Card.css';

const Card = () => {
  return (
    <>
      <div class="flex justify-center items-center h-[97vh] w-full">
        <div class="container flex items-center justify-center  bg-white rounded-xl shadow-2xl box-border">
          <Result />
          <Summary />
        </div>
      </div>
      <div class="md:text-xl text-xs">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Aris Putra M | 2023</a>
      </div>
    </>
  );
};

export default Card;
