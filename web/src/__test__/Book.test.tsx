import React from 'react';
import { render } from '@testing-library/react';
import { Book } from 'src/components/Book';
import { IBook } from 'src/app/services/books';
import { MemoryRouter } from 'react-router-dom';

// create a test for the Book component
test('renders Book component', () => {
  const props: Partial<IBook> = {
    title: 'The Book',
    genre: 'Fiction',
    id: 1337,
    cover: 'https://via.placeholder.com/150',
  };

  const { getByRole } = render(
    <MemoryRouter>
      <Book {...props} />
    </MemoryRouter>
  );

  expect(getByRole('book')).toHaveAttribute('data-id', props.id.toString());
  expect(getByRole('book')).toHaveAttribute('data-title', props.title);
});
