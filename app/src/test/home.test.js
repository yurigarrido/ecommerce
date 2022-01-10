import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helper/renderWithRouter';
import { GlobalStorage } from '../context/GlobalContext';
import Home from '../pages/Home';

describe('<Home />', () => {
  beforeEach(() => {
    renderWithRouter(
      <GlobalStorage>
        <Home placeholder="Digite algum termo de pesquisa ou escolha uma categoria" />
      </GlobalStorage>
    );
  });

  it('checks if the component is on the splash screen', () => {
    const input = screen.getByText(/PESQUISE POR CATEGORIA:/i);
    expect(input).toBeInTheDocument();
  });
  it('checks type', () => {
    const input = screen.getByText(/PESQUISE POR CATEGORIA:/i);
    userEvent.type(input, 'ola');
    console.log(input);
    expect(screen.getByDisplayValue('ola')).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
});
