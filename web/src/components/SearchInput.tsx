import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useCallback } from 'react';
import debounce from 'debounce';

export const SearchInput = ({ onSearch }: any) => {
  const handleSearch = useCallback(
    debounce((e) => onSearch(e.target.value), 500),
    []
  );

  return (
    <div className='relative w-full' role='search'>
      <MagnifyingGlassIcon className='absolute w-5 h-5 left-3 top-1/2 -mt-2.5 text-slate-400' />

      <input
        onChange={handleSearch}
        type='text'
        aria-label='Search for books'
        placeholder='Search for books, magazines, and more'
        className='px-4 py-3 rounded-full w-full leading-6 text-slate-900 placeholder:text-slate-400 pl-10 outline-none'
      />
    </div>
  );
};
