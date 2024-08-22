'use client';

import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { ChevronDown } from 'lucide-react';
import React from 'react';

interface Props {
  className?: string;
}

export const HeaderLogo: React.FC<Props> = ({ className }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="flex items-center justify-between w-[250px] rounded-2xl bg-gradient-to-t from-primary to-secondary">
      <div className="w-[50%] p-6 text-center hover:bg-white hover:opacity-50 cursor-pointer">
        <h1>DNS</h1>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="p-3 mx-3 rounded-lg w-[50%] text-center bg-[#feb147] text-white font-bold cursor-pointer flex items-center justify-center hover:bg-white hover:bg-opacity-50 shadow-lg">
        Каталог
        <ChevronDown className={open ? 'rotate-180 transition-all' : 'transition-all'} />
      </div>
    </div>
  );
};
