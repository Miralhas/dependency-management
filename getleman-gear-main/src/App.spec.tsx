import { render, screen, fireEvent } from '@testing-library/react';
import App from "./App"

describe('Teste de lances', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('Deve exibir mensagem de erro para lance menor que o mínimo', () => {
    const input = screen.getByPlaceholderText(/Lance mínimo/i);
    const button = screen.getByText(/Enviar Lance/i);

    fireEvent.change(input, { target: { value: '4000' } });
    fireEvent.click(button);

    const errorMessage = screen.getByText(/O lance deve ser no mínimo/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('Deve exibir mensagem de sucesso para lance igual ou maior que o mínimo', () => {
    const input = screen.getByPlaceholderText(/Lance mínimo/i);
    const button = screen.getByText(/Enviar Lance/i);

    fireEvent.change(input, { target: { value: '5000' } });
    fireEvent.click(button);

    const successMessage = screen.getByText(/Lance de R\$/);
    expect(successMessage).toBeInTheDocument();
  });
});
