import { cn } from '@/shared/lib/utils';
import React from 'react';

interface Props {
  className?: string;
  width?: string;
  height?: string;
  imageUrl: string;
  text: string;
}

export const Card: React.FC<Props> = ({ className, width, height, imageUrl, text }) => {
  return (
    <div className={cn('relative w-full', className)}>
      <img
        src={imageUrl}
        alt=""
        //    className="h-[300px]"
      />
      <div></div>
    </div>
  );
};
