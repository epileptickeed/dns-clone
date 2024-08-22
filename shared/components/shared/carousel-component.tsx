'use client';

import Image from 'next/image';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface Props {
  className?: string;
}

export const CarouselComponent: React.FC<Props> = ({ className }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive} centerMode={true}>
      <div className="border flex flex-1 flex-col">
        <img
          src={'https://www.socwall.com/images/wallpapers/49426-1920x1080.jpg'}
          alt="photo"
          className="w-full"
        />
        Item 1
      </div>
      <div className="border flex flex-1 flex-col">
        <img
          src={'https://www.socwall.com/images/wallpapers/49426-1920x1080.jpg'}
          alt="photo"
          className="w-full"
        />
        Item 2
      </div>
      <div className="border flex flex-1 flex-col">
        <img
          src={'https://www.socwall.com/images/wallpapers/49426-1920x1080.jpg'}
          alt="photo"
          className="w-full"
        />
        Item 3
      </div>
      <div className="border flex flex-1 flex-col">
        <img
          src={'https://www.socwall.com/images/wallpapers/49426-1920x1080.jpg'}
          alt="photo"
          className="w-full"
        />
        Item 4
      </div>
      <div className="border flex flex-1 flex-col">
        <img
          src={'https://www.socwall.com/images/wallpapers/49426-1920x1080.jpg'}
          alt="photo"
          className="w-full"
        />
        Item 5
      </div>
    </Carousel>
  );
};
