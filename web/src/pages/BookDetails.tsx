import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetBookByIdQuery } from 'src/app/services/books';

export const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: book, isLoading } = useGetBookByIdQuery({ id: Number(id) });
  const navigate = useNavigate();
  console.log(book);
  

  if (isLoading) {
    return null;
  }

  if (Object.keys(book).length === 0) {
    navigate('/');
    return null;
  }

  return (
    <div
      className='bg-top bg-cover w-full h-full min-h-screen'
      style={{ backgroundImage: `url(${book.cover})` }}>
      <div
        className='py-6 sm:py-8 lg:py-12 w-full h-full min-h-screen'
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(10.5, 31.5, 52.5, 1) 150px, rgba(10.5, 31.5, 52.5, 0.84) 100%)',
        }}>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className='max-w-screen-xl px-6 md:px-14 mx-auto '>
          <div className='grid md:grid-cols-3 gap-5 '>
            <div className='flex items-center'>
              <div className='lg:w-80 h-full bg-gray-100 rounded-lg shadow-xl overflow-hidden relative'>
                <img
                  src={book.cover}
                  loading='lazy'
                  alt={book.title}
                  className='w-full h-full object-cover object-center'
                />
              </div>
            </div>

            <div className='md:py-8 md:col-span-2'>
              <div className='mb-2 md:mb-3'>
                <span className='inline-block text-gray-500 mb-0.5'>
                  {book.genre}
                </span>
                <h2 className='text-white text-2xl lg:text-3xl font-bold'>
                  {book.title}
                </h2>
              </div>

              <div className='flex items-center gap-3 mb-6 md:mb-10'>
                <div className='h-7 flex items-center bg-indigo-500 text-white rounded-full gap-1 px-2'>
                  <span className='text-sm'>4.2</span>

                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                </div>

                <span className='text-white text-sm transition duration-100'>
                  56 reviews
                </span>
              </div>

              <div className='mb-4 md:mb-6'>
                <div className='text-white text-lg font-semibold mb-3'>
                  Description
                </div>

                <p className='text-white text'>{book.description}</p>
              </div>

              <div>
                <div className='text-white text-lg capitalize font-extrabold'>
                  {book.author.firstName} {book.author.lastName}
                </div>
                <p className='text-white text-sm capitalize'>author</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
