import { render, screen } from '@testing-library/react';
import renderWithRouter from '../../helper/renderWithRouter';

import Input from './Input';

describe('<Input />', () => {
  beforeEach(() => {
    renderWithRouter(
      <Input placeholder="Digite algum termo de pesquisa ou escolha uma categoria" />
    );
  });

  it('checks if the component is on the splash screen', () => {
    const input = screen.getByPlaceholderText(
      /Digite algum termo de pesquisa ou escolha uma categoria/i
    );
    expect(input).toBeInTheDocument();
  });
});
