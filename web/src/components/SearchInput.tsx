import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useCallback } from 'react';
import debounce from 'debounce';

export const SearchInput = ({ onSearch }: any) => {
  const handleSearch = useCallback(
    debounce((e) => onSearch(e.target.value), 500),
    [onSearch]
  );

  return (
    <div className='group relative rounded-md mb-5'>
      <MagnifyingGlassIcon
        width='20'
        height='20'
        className='absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500 '
      />

      <input
        onChange={handleSearch}
        type='text'
        aria-label='Search for books'
        placeholder='Search for books...'
        className=' px-3 py-2 w-full text-sm leading-6 text-slate-900 placeholder:text-slate-400 rounded-md pl-10 shadow-sm outline-none transition ring-slate-200 ring-1 focus:ring-2 focus:ring-blue-500'
      />
    </div>
  );
};
