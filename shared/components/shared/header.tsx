import React from 'react';
import { Container } from './container';
import { cn } from '@/shared/lib/utils';
import { HeaderInput, HeaderLogo } from './header-components';
import { HeaderRightButtons } from './header-components/header-right-buttons';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <Container className="py-4">
      <header className={cn('flex items-center justify-between', className)}>
        <HeaderLogo />
        <HeaderInput />
        <HeaderRightButtons />
      </header>
    </Container>
  );
};
