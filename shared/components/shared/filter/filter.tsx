'use client';

import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Title } from '../title';
import { FilterCheckbox } from './filter-checkbox';
import { FilterInputs } from './filter-inputs';
import { FilterIngredients } from './filter-ingredients';

interface Props {
  className?: string;
}

export const Filter: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex flex-col ', className)}>
      <div className="flex flex-col">
        <Title size="md" text="Фильтрация" className="mb-3" />
        <div className="flex flex-col gap-3 ml-3">
          <FilterCheckbox text={'Можно собирать'} value={''} name="Можно собирать" />
          <FilterCheckbox text={'Новинки'} value={''} name="Новинки" />
        </div>
      </div>

      <hr className="w-full my-4" />

      <FilterInputs />

      <hr className="w-full my-4" />

      <FilterIngredients />
    </div>
  );
};
