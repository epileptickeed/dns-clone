'use client';

import { cn } from '@/shared/lib/utils';
import { Search, X } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useClickAway } from 'react-use';

interface Props {
  className?: string;
}

interface Queries {
  id: string;
  title: string;
}

export const HeaderInput: React.FC<Props> = ({ className }) => {
  const [focused, setFocused] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [queries, setQueries] = React.useState<Queries[]>([]);
  const ref = React.useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (searchQuery !== '') {
      setQueries((prev: Queries[]) => {
        const newQueries = [
          ...prev,
          {
            id: crypto.randomUUID(),
            title: searchQuery,
          },
        ];

        if (newQueries.length === 6) {
          newQueries.shift();
        }

        return newQueries;
      });
      setSearchQuery('');
    }
  };

  const deleteQuery = (id: string) => {
    setQueries((queries) => {
      return queries.filter((item) => item.id !== id);
    });
  };

  const shutupFunc = () => {};
  return (
    <>
      {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />}

      <div
        className={cn('border flex flex-1 h-16 rounded-xl mx-12 relative z-30', className)}
        ref={ref}>
        <form
          action=""
          onSubmit={handleSubmit}
          className="w-full outline-none bg-gray-100 rounded-xl hover:bg-white hover:shadow-lg transition-all">
          <input
            type="text"
            className="w-full outline-none bg-gray-100 pl-4 h-full rounded-xl hover:bg-white hover:shadow-lg transition-all"
            placeholder="Найти что-нибудь..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setFocused(true)}
          />
        </form>
        <Search className="absolute right-5 top-1/2 translate-y-[-50%] text-gray-400" />

        {queries.length > 0 && (
          <div
            className={cn(
              'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
              focused && 'visible opacity-100 top-[4.25rem]',
            )}>
            {queries.map((query) => (
              <div className="flex items-center justify-between px-4" key={query.id}>
                <Link
                  onClick={shutupFunc}
                  href={'/'}
                  className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10">
                  <span>{query.title}</span>
                </Link>
                <X className="cursor-pointer" onClick={(e) => deleteQuery(query.id)} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
