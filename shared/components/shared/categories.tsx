'use client';

import { cn } from '@/shared/lib/utils';
import { useCategoryStore } from '@/shared/store/category';
import React from 'react';

interface Props {
  className?: string;
}

export const data = [
  {
    title: 'title0',
    id: 0,
  },
  {
    title: 'title1',
    id: 1,
  },
  {
    title: 'title2',
    id: 2,
  },
  {
    title: 'title3',
    id: 3,
  },
  {
    title: 'title4',
    id: 4,
  },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn('flex items-center gap-4 border w-full bg-gray-100 rounded-xl p-2', className)}>
      {data.map((item) => (
        <div
          key={item.id}
          //   onClick={() => setActiveId(item.id)}
          className={
            categoryActiveId === item.id
              ? 'p-3 w-[100px] shadow-md text-primary text-center rounded-lg bg-white cursor-pointer'
              : 'p-3 w-[100px] text-center rounded-lg bg-none cursor-pointer'
          }>
          {item.title}
        </div>
      ))}
    </div>
  );
};
