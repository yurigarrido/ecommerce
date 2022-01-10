import { render, screen } from '@testing-library/react';
import App from './App';

test(' ', () => {
  render(<App />);
  const linkElement = screen.getByText(/aqui é home/i);
  expect(linkElement).toBeInTheDocument();
});
