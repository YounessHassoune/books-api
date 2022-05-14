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
  const { data: books = [], isLoading: isLoadingBooks } = useGetBooksQuery();

  const [title, setTitle] = useState('');
  const { data: searchBooks = [] } = useSearchBooksQuery(
    { title },
    { skip: title.length === 0 }
  );

  return (
    <>
      <div
        style={{
          backgroundImage: `url('https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/bcT8CaBIj086WVD7K529h78eujb.jpg')`,
        }}
        className='shadow-xl mb-12 bg-cover w-full text-white bg-no-repeat px-5 py-12 sm:px-6 lg:py-16 lg:px-8 space-y-8'>
        <Cta />
        <SearchInput onSearch={setTitle} />
      </div>
      <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        {searchBooks.length === 0 && title.length > 0 && (
          <>
            <div className='text-center text-gray-500 text-lg'>
              No books found.
            </div>
            <div className='py-4'>
              <div className='w-full border-t border-gray-300'></div>
            </div>
          </>
        )}

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

        {!isLoadingBooks && books.length === 0 && (
          <div className='text-center text-gray-500 text-lg'>
            No books found.
          </div>
        )}

        {isLoadingBooks && (
          <div className='text-center text-gray-500 text-lg'>
            Loading books...
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};
