import { IBook, useSearchBooksQuery } from 'src/app/services/books';
import { useGetBooksQuery } from 'src/app/services/books';
import { motion } from 'framer-motion';
import { Book, Cta, Footer, SearchInput } from 'src/components';
import { useState } from 'react';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.3,
    },
  },
};

export const Books = () => {
  const { data: books, isLoading } = useGetBooksQuery();
  const [title, setTitle] = useState('');
  const { data: searchBooks = [] } = useSearchBooksQuery(
    { title },
    { skip: title.length === 0 }
  );

  if (isLoading) {
    return null;
  }
  return (
    <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
      <Cta />
      <SearchInput onSearch={setTitle} />

      {searchBooks.length > 0 && title.length > 0 && (
        <>
          <h1 className='text-xl font-bold mb-4'>
            Search Results {searchBooks.length}
          </h1>
          <motion.ul
            initial='hidden'
            animate='visible'
            variants={container}
            className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-6'>
            {searchBooks.map((book: IBook) => (
              <Book key={book.id} {...book} />
            ))}
          </motion.ul>
          <div className='py-4'>
            <div className='w-full border-t border-gray-300'></div>
          </div>
        </>
      )}

      {books && (
        <motion.ul
          initial='hidden'
          animate='visible'
          variants={container}
          className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-6'>
          {books.map((book: IBook) => (
            <Book key={book.id} {...book} />
          ))}
        </motion.ul>
      )}

      <Footer />
    </div>
  );
};
