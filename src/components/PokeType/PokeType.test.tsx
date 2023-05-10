import { render, screen } from '@testing-library/react';
import PokeType from './PokeType';

describe('Given a PokeType component', () => {
  describe('When it is rendered with a type', () => {
    const type = 'fire';
    test('then it should show the corresponding type icon', () => {
      render(<PokeType type={type} />);
      const typeElement = screen.getByTestId('type');
      expect(typeElement).toHaveStyle(`
        display: block;
        background-position: -150px -50px;
      `);
    });
  });

  describe('When it is rendered without a type', () => {
    test('then it should not be displayed', () => {
      render(<PokeType type={undefined} />);
      const typeElement = screen.getByTestId('type');
      expect(typeElement).toHaveStyle('display: none');
    });
  });
});
