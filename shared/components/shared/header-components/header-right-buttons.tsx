import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Button } from '../../ui';
import { HeartIcon, ShoppingCartIcon, User } from 'lucide-react';
import Link from 'next/link';

interface Props {
  className?: string;
}

export const HeaderRightButtons: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <Link
        className="flex flex-1 flex-col items-center p-2 rounded-xl text-gray-400 hover:bg-gray-100 relative"
        href={'/'}>
        <div className="relative">
          <HeartIcon className="text-gray-400" />
          <span className="absolute right-[-10px] top-[-10px] bg-gradient-to-t from-primary to-secondary text-white inline-flex items-center justify-center rounded-2xl shadow-sm px-2 text-[.8rem] font-bold">
            1
          </span>
        </div>
        Избранное
      </Link>
      <Link
        className="flex flex-1 flex-col items-center p-2 rounded-xl hover:bg-gray-100 text-gray-400"
        href={'/'}>
        <ShoppingCartIcon />
        Корзина
      </Link>
      <Link
        className="flex flex-1 flex-col items-center p-2 rounded-xl hover:bg-gray-100 text-gray-400"
        href={'/'}>
        <User />
        Войти
      </Link>
    </div>
  );
};
