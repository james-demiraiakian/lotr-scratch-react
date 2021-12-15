import { render, screen } from '@testing-library/react';
import Main from './views/Main/Main';

test('Render Main', () => {
  render(<Main />);
  const linkElement = screen.getByText(/Main/i);
  expect(linkElement).toBeInTheDocument();
});
