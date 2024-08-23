'use client';

import React from 'react';
import { FilterCheckbox } from './filter-checkbox';

interface Props {
  className?: string;
}

export const FilterIngredients: React.FC<Props> = ({ className }) => {
  const [isActive, setIsActive] = React.useState(false);
  let newArray = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className={className}>
      {isActive ? '' : ''}
      {newArray.map((item, index) => (
        <div key={index}>
          <FilterCheckbox text={'Checkboxes'} value={''} />
        </div>
      ))}
    </div>
  );
};
