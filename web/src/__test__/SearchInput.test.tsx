import React from 'react';
import { render } from '@testing-library/react';
import { SearchInput } from 'src/components/SearchInput';

// test search input component
test('renders Book component', () => {
  const { getByRole } = render(<SearchInput />);
  expect(getByRole('search')).toBeInTheDocument();
});
