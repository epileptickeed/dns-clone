import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Title } from '../title';
import { Input } from '../../ui';

interface Props {
  className?: string;
}

export const FilterInputs: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex flex-col', className)}>
      <Title text="Цены от и до: " size="md" />
      <div className="flex items-center justify-between gap-4">
        <Input type="number" min={0} max={1000} defaultValue={0} placeholder="0" />
        <span>-</span>
        <Input type="number" min={0} max={1000} defaultValue={1000} placeholder="1000" />
      </div>
    </div>
  );
};
