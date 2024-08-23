'use client';

import { cn } from '@/shared/lib/utils';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
}

export const Carousel: React.FC<Props> = ({ className }) => {
  const [width, setWidth] = React.useState(0);
  const slider_wrapper = useRef<any>(null);

  React.useEffect(() => {
    setWidth(slider_wrapper?.current.scrollWidth - slider_wrapper?.current.offsetWidth);
  }, []);

  console.log(new Array(6));

  return (
    <div className={cn('flex items-center justify-between w-full h-full flex-col mt-6', className)}>
      <div className="w-[60%] mb-[2vw] sm:w-[95%]">
        <h1>Horizontal carousel</h1>
      </div>
      <motion.div
        className="w-[60%] overflow-hidden flex sm:w-full"
        ref={slider_wrapper}
        whileTap={{ cursor: 'grabbing' }}>
        <motion.div className="inline-flex" drag="x" dragConstraints={{ right: 0, left: -width }}>
          {[...new Array(6)].map((item, index) => (
            <div
              key={index}
              className="w-[300px] bg-black rounded-lg p-[30px 20px] shadow-lg backdrop-blur-lg">
              <h2 className="text-white">01</h2>
              <div className="mb-4 ">
                <div className="text-xs text-white">{item}</div>
                <div className="text-white">James cameroon</div>
              </div>
              <div className="w-full h-[250px] block rounded-md mb-[32px]">
                <img
                  className="w-full h-full object-cover pointer-events-none"
                  src="https://www.socwall.com/images/wallpapers/49426-1920x1080.jpg"
                  alt=""
                />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
