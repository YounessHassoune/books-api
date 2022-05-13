import { IBook } from 'src/app/services/books';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Book = ({ title, genre, id, cover }: IBook) => {
  return (
    <motion.li
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      whileTap={{ scale: 0.95 }}>
      <Link to={`/book/${id}`}>
        <div className='group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-md mb-2 lg:mb-3'>
          <img
            src={cover}
            loading='lazy'
            alt={title}
            className='w-full h-full object-cover object-center group-hover:scale-110 transition duration-200'
          />
        </div>

        <div className='flex flex-col text-left'>
          <span className='text-gray-500'>{genre}</span>
          <span className='text-gray-800  break-words hover:text-gray-500 text-md lg:text-md text-ellipsis font-semibold'>
            {title}
          </span>
        </div>
      </Link>
    </motion.li>
  );
};
