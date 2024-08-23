import React from 'react';
import { Categories } from './categories';

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return <Categories />;
};
